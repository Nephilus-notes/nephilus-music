export interface Song { 
    id: number;
    title: string;
    artist: string;
    album: string;
    year: string;
    genre: string;
    audio_url: string;
    image_url: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    deleted: boolean;
    lyrics: string;
    tab: string;
    video_url: string;
}