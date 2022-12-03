import { log } from "./logging";

export class APIResponse<T extends ({} | null)> {
    constructor(public code: number, public body: T | null) { }

    static log(res: APIResponse<any>, route: string) {
        log({
            type: "Response",
            code: res.code,
            body: res.body,
            route: route
        })
    }

    static fromContent = (res: any): APIResponse<any> => {
        if (res instanceof APIResponse) {
            return res;
        }

        return new APIResponse(0, {
            msg: "Error."
        });
    };
}
