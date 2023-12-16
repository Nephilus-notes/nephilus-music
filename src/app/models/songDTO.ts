import { PatronDTO } from './patronDTO';

export interface SongDTO { 
    title: string,
    artist:string,
    album?:string,
    genre?:string,
    year?:string,
    audio_url?:string,
    image_url?:string,
    times_requested?: number,
    lyrics?:string,
    tab?:string,
    video_url?:string,
    duration?:number,
    deleted?: boolean,
    sets?: number, // setlist ids
    requesting_patrons?: string, // patron Name
    known?: boolean,
}