import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Post } from './post/model/post';
import { map, filter, switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://kavyalay-api-0brsshl1219l.runkit.sh/';

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]> {
    return this.http.get(this.apiUrl).pipe(map((res: Response) => res.json()))
        .pipe(catchError((error: any) => Observable.throw(error.json().error || 'Server error')));
  }

  savePosts(links: Post[]): Observable<Post[]> {

    // const body = new URLSearchParams();

  // append your data
  // const body = { username: 'admin', password: 'sss@1234', link: links };
  
    // let options = {
    //     headers: new Headers().set('Content-Type', 'application/x-www-form-urlencoded')
    // };

    const headers = new Headers ({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    // if (body == null)
    // {

        const urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', 'admin');
        urlSearchParams.append('password', 'sss@1234');
        urlSearchParams.append('link', JSON.stringify(links));
        const body = urlSearchParams.toString();
    // }

    return this.http.post(this.apiUrl, body, options).pipe(map((res: Response) => res.json()))
    .pipe(catchError((error: any) => Observable.throw(error.json().error || 'Server error')));
  }
}
