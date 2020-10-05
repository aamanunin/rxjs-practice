import {Observable} from 'rxjs';

export function createHttpObservable(url: string): Observable<any> {
  return new Observable(subscriber => {
    fetch(url)
      .then(response => response.json())
      .then(body => {
        subscriber.next(body);
        subscriber.complete();
      })
      .catch((err) => subscriber.error(err));
  });
}

