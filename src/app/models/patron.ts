export interface Patron {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    address?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    country?: string;
    phone?: string;
    is_admin: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    deleted: boolean;
    one_time_donation: number;
    recurring_donation: number;
    times_at_show: number;
}