import { inject } from 'inversify';
import { controller, httpMethod, interfaces } from 'inversify-express-utils';
import { IEmailService, Request } from '~backend/interfaces';
import { core } from '~core';
import { TOKENS } from '~backend/tokens';

@controller('')
export class EmailController implements interfaces.Controller {
    constructor(@inject(TOKENS.EmailService) private emailService: IEmailService) { }

    @httpMethod(core.endpoints.addContact.method, core.endpoints.addContact.route)
    public async doEmail(req: Request<typeof core.endpoints.addContact.request>): Promise<core.APIResponse<typeof core.endpoints.addContact.response>> {
        try {
            await this.emailService.addContact(req.body);
            return new core.APIResponse(200, null);
        } catch (err) {
            throw new core.APIError(500, "Failed to add contact.", err as Error)
        }
    }
}


