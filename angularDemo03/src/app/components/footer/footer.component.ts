import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() public outer = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  sendOuter(): void {
    this.outer.emit('这是footer组件的outer');
  }
}
