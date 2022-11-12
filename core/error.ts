import { log } from "./logging";

export interface APIErrorResponse {
    code: number;
    message: string;
}

export class APIError extends Error {
    constructor(public code: number, public message: string, public err: Error) {
        super();
    }

    static log(err: APIError, route: string) {
        log({
            type: "Error",
            code: err.code,
            body: err.message,
            route: route
        })
    }

    static toString(err: APIErrorResponse) {
        return `Error ${err.code}: ${err.message}`;
    }

    static toResponse(err: APIError): APIErrorResponse {
        return {
            code: err.code,
            message: err.message,
        };
    }

    static fromError = (err: Error): APIError => {
        console.log('err', JSON.stringify(err))
        if (err instanceof APIError) {
            return err;
        }

        switch ((err.name as ERROR_KEYS)) {
            case 'ValidationError':
                return new APIError(409, err.message, err);
            case 'DbError':
                return new APIError(500, 'Database error.', err);
            default:
                return new APIError(500, 'Unknown error.', err);
        }
    };
}

export type ERROR_KEYS =
    | 'ValidationError'
    | 'DbError';
