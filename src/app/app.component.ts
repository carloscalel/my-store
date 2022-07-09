import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Carlos';
  age = 18;
  img = 'https://th.bing.com/th/id/OIP.12CBhuAELYKyec1x1jcZUgHaEo?pid=ImgDet&rs=1'
  btnDisabled = true;

  person = {
    name: 'Carlos',
    age: 18,
    avatar: 'https://th.bing.com/th/id/OIP.12CBhuAELYKyec1x1jcZUgHaEo?pid=ImgDet&rs=1'
  }

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increseAge(){
    this.person.age += 1;
  }

  onScroll( event: Event){
    const element =  event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element =  event.target as HTMLInputElement;
    this.person.name =  element.value;
  }
}
