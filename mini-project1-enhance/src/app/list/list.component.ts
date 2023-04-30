import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  
  delete(index:any){
    this._shared.heros.splice(index,1)
  }
  //the shared functions called in constructor from services
  constructor(public _shared: SharedService){}
}
