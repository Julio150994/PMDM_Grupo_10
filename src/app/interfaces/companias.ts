export interface Compania {
    id: number;
    name: string;
    address: string;
    city: string;
    cif: string;
    email: string;
    phone: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    del_term_id: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    transport_id: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    payment_term_id: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    bank_entity_id: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    discount_id: number;
    deleted: boolean;
}
