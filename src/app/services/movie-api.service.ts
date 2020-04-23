import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  readonly MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';
  readonly KEY = 'e6d20ecc169a8b81ebf7afa30d3ad265';

  constructor(private httpClient: HttpClient) { }

  get(query: string): any {
    return this.httpClient.get<any>(this.MOVIE_URL + '/?api_key=' + this.KEY + '&query=' + query).toPromise();
  }
}
