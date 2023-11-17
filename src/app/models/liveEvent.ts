export interface LiveEvent {
    /* id, title, description, start_date, end_date, venue_name, venue_address,
    venue_city, venue_state, venue_zip_code, venue_country, venue_url,
    venue_phone, created_at, updated_at, deleted_at?, deleted, event_type,
    short_description, image_url?
    */
    id: number;
    title: string;
    description: string;
    start_date: Date;
    end_date: Date;
    venue_name: string;
    venue_address: string;
    venue_city: string;
    venue_state: string;
    venue_zip_code: string;
    venue_country: string;
    venue_url: string;
    venue_phone: string;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date;
    deleted: boolean;
    event_type: string;
    short_description: string;
    image_url?: string;
}