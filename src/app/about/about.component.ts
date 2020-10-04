import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fromEvent, interval, timer} from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // const interval$ = interval(1000);
    const interval$ = timer(3000, 1000);


    const subscription = interval$.subscribe(value => console.log('stream 1 ' + value));

    setTimeout(() => subscription.unsubscribe(), 5000);

    const click$ = fromEvent(document, 'click');

    click$.subscribe(
      event => console.log(event),
      error => console.log(error),
      () => console.log('complete')
    );
  }

}
