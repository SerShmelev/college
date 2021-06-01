import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface College {
    id: number;
    name: string;
    photo: string;
    about: string;
    media_type: number;
    vimeo_video_id: number;
}

@Injectable()
export class CollegeService {
    constructor(private http: HttpClient) {
    }
    getCollege(): Observable<College> {
        return this.http.get<College>('assets/data/college.data.json');
    }
}
