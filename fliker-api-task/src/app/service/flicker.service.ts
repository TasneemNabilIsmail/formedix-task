import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FlickerOutput, FlickerPhoto } from '../models/search-flicker.model';


@Injectable({
  providedIn: 'root',
})
export class FlickerService {
  constructor(private http: HttpClient) {}

  searchImage(searchText: string, page:number, perPage: number): Observable<FlickerPhoto[]> {
    const url =
      'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
    const params = `api_key=${environment.flicker.key}&text=${searchText}&format=json&nojsoncallback=1&page=${page}&per_page=${perPage} `;
    return this.http.get(url + params).pipe(
      map((res: Object) => {
        const urlArr: FlickerPhoto[] = [];
        return (res as FlickerOutput).photos.photo.map((ph: FlickerPhoto) => {

          return {
            url: `https://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}`,
            title: ph.title,
            owner: ph.owner,
            server: ph.server,
            farm: ph.farm,
            id: ph.id,
            secret: ph.secret,
          };
        });
      })
    );
  }
}
