import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  public headerMsg: any = 'contents的头部';

  @Input() run: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  getRun(): void {
    this.run();
  }
}
