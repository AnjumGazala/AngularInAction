import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  product = {
    name: "iphone 13",
    price: 999,
    color: "Black",
    discount: 8.5,
    instock: 0
  }
  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount /100)
  }
}
