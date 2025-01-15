import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  addToCart: number = 0
  //name ="Jhon Doe"
  product = {
    name: "iphone X",
    price: 999,
    color: "Black",
    discount: 8.5,
    instock: 10,
    pImage: "/assets/images/iphone.jpg"
  }
  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount /100)
  }
  onNameChange(event:any){
    //console.log(event.target.value);
    //this.name = event.target.value
  }
  decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart --;
    }
    
  }
  incrementCartValue(){
    if(this.addToCart < this.product.instock){
      this.addToCart ++;
    }
    
  }
}
