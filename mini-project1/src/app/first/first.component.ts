import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
hero = {
  name :'',
  power : 0,
  image :'',
}
heros :any[] = [];

create(){
  //filling the array with hero object
  this.heros.push(this.hero);
  //empty the object after filling the heros array
  this.hero = {
    name :'',
    power : 0,
    image :'',
  }

}
}
