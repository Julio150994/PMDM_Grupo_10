export interface Usuarios {
    id: number;
    firstname: string;
    secondname: string;
    email: string;
    password: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    company_id: number;
    type: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    email_confirmed: boolean;
    actived: boolean;
    iscontact: boolean;
    deleted: boolean;
}
