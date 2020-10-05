import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {interval, noop, Observable, of, timer} from 'rxjs';
import {catchError, delayWhen, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  ngOnInit(): void {
    const http$ = createHttpObservable('/api/courses');

    const course$ = http$.pipe(
      map(res => res.payload),
      shareReplay()
    );

    this.beginnerCourses$ = course$.pipe(
      map(courses => courses.filter(course => course.category === 'BEGINNER'))
    );

    this.advancedCourses$ = course$.pipe(
      map(courses => courses.filter(course => course.category === 'ADVANCED'))
    );
  }

}
