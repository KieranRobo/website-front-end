export class ContactMessage {

    fromEmail: string;
    fromName: string;
    message: string;

    constructor(
        fromEmail: string,
        fromName: string,
        message: string
    ) 
    {
        this.fromEmail = fromEmail;
        this.fromName = fromName;
        this.message = message;
     }
}
