import { inject } from 'inversify';
import { controller, httpMethod, interfaces } from 'inversify-express-utils';
import { IEmailService, Request } from '~backend/interfaces';
import { endpoints } from '~core';
import { TOKENS } from '~backend/tokens';
import { APIResponse, APIError } from '~core';

@controller('')
export class EmailController implements interfaces.Controller {
    constructor(@inject(TOKENS.EmailService) private emailService: IEmailService) { }

    @httpMethod(endpoints.addContact.method, endpoints.addContact.route)
    public async doEmail(req: Request<typeof endpoints.addContact.request>): Promise<APIResponse<typeof endpoints.addContact.response>> {
        try {
            await this.emailService.addContact(req.body);
            return new APIResponse(200, null);
        } catch (err) {
            throw new APIError(500, "Failed to add contact.", err as Error)
        }
    }
}


