import { Component } from '@angular/core';

@Component({
  selector: 'app-sec-component',
  templateUrl: './sec-component.component.html',
  styleUrls: ['./sec-component.component.css']
})
export class SecComponentComponent {
//create an Object
  user ={
    name:'Lujain Smadi',
    age:29,
    imageURL:'https://cdn.dribbble.com/users/1397859/screenshots/15623557/98_4x.jpg'
  }

  myName = '';
  change(){
    this.user.name = this.myName,
    this.user.age = 21,
    this.user.imageURL ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU40ifYM7jFVe5KIkDz2bOqYM_AaWnrWhqqw&usqp=CAU"
  }

  color = 'yellow';
 
car = [
  'BMW',
  'Toyota',
  'Rang Rover'
];

students = [
  {
  name:'ali',
  age:22,
  bg: 'yellow',
  color:'blue'
},
  {
  name:'sami',
  age:28,
  bg: 'red',
  color:'yellow'

},
  {
  name:'serine',
  age:21,
  bg:'green',
  color:'red'
},
  {
  name:'omar',
  age:4,
  bg:'yellow',
color:"black"
}

]

  display = true;

}
