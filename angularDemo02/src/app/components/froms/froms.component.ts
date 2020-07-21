import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-froms',
  templateUrl: './froms.component.html',
  styleUrls: ['./froms.component.scss']
})
export class FromsComponent implements OnInit {

  public peopleInfo: any = {
    username: '',
    sex: '',
    cityList: ['北京', '上海', '深圳'],
    city: '上海',
    hobby: [{
      title: '吃饭',
      checked: false,
    }, {
      title: '睡觉',
      checked: false,
    }, {
      title: '敲代码',
      checked: false,
    }],
    remark: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  doSubmit() {
    console.log(this.peopleInfo);
  }
}
