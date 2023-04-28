import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  name = 'Lujain Smadi '
  age = 28
  imageUrl = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';
  text1 = '';
  change(){
    this.name = "ALI";
    this.age = 22;
  }
}
