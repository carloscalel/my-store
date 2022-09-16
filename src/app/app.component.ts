import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Carlos';
  age = 18;
  img = 'https://th.bing.com/th/id/OIP.12CBhuAELYKyec1x1jcZUgHaEo?pid=ImgDet&rs=1'
  btnDisabled = true;

  person = {
    name: 'Carlos',
    age: 18,
    avatar: 'https://th.bing.com/th/id/OIP.12CBhuAELYKyec1x1jcZUgHaEo?pid=ImgDet&rs=1'
  }

  names : string[] =  ['nico', 'carlos', 'fernando'];
  newName =  '';

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

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

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }
}
