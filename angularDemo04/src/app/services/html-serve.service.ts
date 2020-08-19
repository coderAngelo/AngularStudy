import {Injectable} from '@angular/core';
import axios from 'axios';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HtmlServeService {

  constructor() {
  }

  axiosGet(api) {
    return new Observable<any>((observer) => {
      axios.get(api).then(data => {
        observer.next(data);
      });
    });
  }
}
