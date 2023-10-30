export interface Event {
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
    deleted_at: Date;
    deleted: boolean;
    event_type: string;
    short_description: string;
    image_url: string;
}