import express from "express";

export type Request<T = Record<string, any>> = Omit<express.Request, 'body'> & { body: T };

export type Contact = {
    email: string;
}

export interface IEmailService {
    addContact: (contact: Contact) => Promise<void>;
}
