export interface Setlist {
    id : number;
    title : string;
    description : string;
    created_at : Date;
    updated_at : Date;
    deleted_at : Date;
    deleted : boolean;
    event_id ?: number;
}