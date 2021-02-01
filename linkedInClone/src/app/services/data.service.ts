import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AppError} from '../customErrorValidators/app-error';
import {NotFoundError} from '../customErrorValidators/not-found-error';
import {BadRequest} from '../customErrorValidators/bad-request';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url: any;

  constructor(private http: HttpClient) {
  }

  setUrl(url: string): void {
    console.log('url set');
    this.url = url;
  }

  get(): Observable<any> {
    return this.http.get(this.url)
      .pipe(catchError(err => this.handleError));
  }

  create(resource: any): Observable<any> {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(catchError(err => this.handleError(err)));
  }

  update(resource: any): Observable<any> {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(catchError(err => this.handleError(err)));
  }

  delete(id: any): Observable<any> {
    return this.http.delete(this.url + '/' + id)
      .pipe(catchError((err) => this.handleError(err)));
  }

  private handleError(err: Response): Observable<any> {
    if (err.status === 404) {
      return throwError(new NotFoundError());
    }
    if (err.status === 400) {
      return throwError(new BadRequest());
    }
    return throwError(new AppError(err));
  }
}

