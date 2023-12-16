export interface PatronDTO {
    name: string;
    email: string;
    phone?: string,
    address?: string,
    city?: string,
    state?: string,
    zip_code?: string,
    country?: string,
    is_admin?: boolean,
    is_artist?: boolean,
    is_patron?: boolean,
    is_subscribed?: boolean,
    is_active?: boolean,
    deleted?: boolean,
    one_time_donation?: number;
    recurring_donation?: number;
    times_at_show?: number;
}