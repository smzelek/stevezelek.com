// import { Contact } from "~backend/interfaces";
// import { APIErrorResponse } from "./error";

// const HOST = process.env.API_URL!;

// export class Endpoint<Request, Response> {
//     constructor(
//         public readonly method: 'get' | 'put' | 'post' | 'delete',
//         private readonly _route: string,
//     ) { }
//     get request(): Request {
//         return null as unknown as Request;
//     }
//     get response(): Response {
//         return null as unknown as Response;
//     }

//     get route(): string {
//         return this._route;
//     }

//     get endpoint(): string {
//         return `${HOST}${this._route}`;
//     }

//     async do(req: Omit<RequestInit, 'body'> & { body: Request }): Promise<Response | APIErrorResponse> {
//         const res = await fetch(this._route, req as unknown as RequestInit);
//         return res.json();
//     }
// }

// export const endpoints = {
//     addContact: new Endpoint<Contact, null>('put', '/contacts')
// }