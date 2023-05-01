import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  delete(index:any){
    this._shared.heros.splice(index,1)
  }
  //the shared functions called in constructor from services
  constructor(public _shared: SharedService){}
}
