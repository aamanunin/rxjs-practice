import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fromEvent, interval, noop, Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // const http$ = createHttpObservable('/api/courses');
    //
    // const course$ = http$.pipe(
    //   map(res => res.payload)
    // );
    //
    // course$.subscribe(
    //   (courses) => console.log(courses),
    //   noop,
    //   () => 'completed'
    //   );
  }

}
