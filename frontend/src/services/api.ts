import { core } from '~core';

export class API {
        static callAPI<A, B>(endpoint: core.Endpoint<A, B>) {
        return (req: Parameters<typeof endpoint.do>[0]) => {
            return endpoint.do(req);
        }
    }

    static async addContact(body: typeof core.endpoints.addContact.request) {
        return API.callAPI(core.endpoints.addContact)({ body })
    }
}
