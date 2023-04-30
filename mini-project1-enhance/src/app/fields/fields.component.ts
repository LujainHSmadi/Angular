import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent {
  hero = {
    name :'',
    power : 0,
    image :'',
  }

  create(){
    //filling the array with hero object
    this._shared.heros.push(this.hero);
    //empty the object after filling the heros array
    this.hero = {
      name :'',
      power : 0,
      image :'',
    }
  
  }
  constructor(public _shared:SharedService){
  }
}
