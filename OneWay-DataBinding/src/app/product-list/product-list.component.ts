import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  name = 'John Smith';
  addToCart : number = 0;
  product = {
    name: 'Iphone X',
    price: 789,
    color: 'black',
    discount: 8.5,
    inStock: 10,
    pImage :'/assets/images/iphone.jpg'
  }
  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount /100)
  }
  onNameChange(event:any){
   
    this.name= event.target.value
  }

  decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart--;
    }
   
  }

  incrementCartValue(){
    if(this.addToCart < this.product.inStock){
      this.addToCart++;
    }
    
  }
}
