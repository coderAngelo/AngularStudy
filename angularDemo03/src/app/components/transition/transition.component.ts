import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {

  public asideDom: any = document.getElementsByClassName('aside');

  constructor() {
  }

  ngOnInit(): void {
  }

  showAside(): void {
    // console.log(this.asideDom[0])
    this.asideDom[0].style.transform = 'translate(0,0)';
  }

  hideAside(): void {
    this.asideDom[0].style.transform = 'translate(100%,0)';
  }
}
