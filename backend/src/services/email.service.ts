import { injectable } from 'inversify';
import { Contact, IEmailService } from 'src/interfaces';
import sendgridClient from '@sendgrid/client';
import { isValidEmail } from '~core';

@injectable()
export class EmailService implements IEmailService {
    constructor() {
        sendgridClient.setApiKey(process.env.SENDGRID_API_KEY!)
    }

    async addContact({ email }: Contact): Promise<void> {
        if (!isValidEmail(email)) {
            throw Error(`email is not valid must be less than 50 chars, got ${email}`);
        }
        if (email.length > 254) {
            throw Error(`email must be less than 254 chars, got ${email}`)
        }

        try {
            const [res] = await sendgridClient.request({
                url: `/v3/marketing/contacts/search/emails`,
                method: 'POST',
                body: {
                    emails: [email]
                }
            });
            if (res.statusCode === 200) {
                throw Error(`email was already in use, got ${email}`)
            }
        } catch (err) {
            throw err;
        }

        try {
            await sendgridClient.request({
                url: `/v3/marketing/contacts`,
                method: 'PUT',
                body: {
                    contacts: [{
                        email,
                    }]
                }
            });
        } catch (err) {
            throw err;
        }
    }
}