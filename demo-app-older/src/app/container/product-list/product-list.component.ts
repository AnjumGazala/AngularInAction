import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
      id:1,
      name:"Nike React Infinity Run Flyknit",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
      ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
      to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
      of Lorem Ipsum.`,
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size :[6,7,8,9,10],
      color:["White", "Blue", "Black"],
      price: 160,
      discountPrice: 140,
      is_in_inventory: true,
      items_left : 3,
      imageURL: "/assets/images/shoeImage1.jpg",
      slug: "nike-react-infinity-run-flyknit"
     },
     {
      id:2,
      name:"Nike React Miler",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
      ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
      to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
      of Lorem Ipsum.`,
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size :[6,7,8,9,10],
      color:["White", "Blue", "Black"],
      price: 130,
      is_in_inventory: true,
      items_left : 3,
      imageURL: "/assets/images/shoeImage4.jpg",
      slug: "nike-react-miler"
     },
     {
      id:3,
      name:"Nike Air Zoom 37",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
      ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
      to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
      of Lorem Ipsum.`,
      brand: "NIKE",
      gender: "WOMEN",
      category: "RUNNING",
      size :[6,7,8,9,10],
      color:["White", "Blue", "Black"],
      price: 130,
      is_in_inventory: false,
      items_left : 3,
      imageURL: "/assets/images/shoeImage5.jpg",
      slug: "nike-air-zoom"
     },
     {
      id:4,
      name:"Nike React Infinity Run Flyknit",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
      ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
      to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
      of Lorem Ipsum.`,
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size :[6,7,8,9,10],
      color:["White", "Blue", "Black"],
      price: 160,
      discountPrice: 140,
      is_in_inventory: true,
      items_left : 3,
      imageURL: "/assets/images/shoeImage1.jpg",
      slug: "nike-react-infinity-run-flyknit"
     },
     {
      id:5,
      name:"Nike React Miler",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
      ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
      to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
      of Lorem Ipsum.`,
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size :[6,7,8,9,10],
      color:["White", "Blue", "Black"],
      price: 130,
      is_in_inventory: true,
      items_left : 3,
      imageURL: "/assets/images/shoeImage4.jpg",
      slug: "nike-react-miler"
     },
     {
      id:6,
      name:"Nike Air Zoom 37",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
      ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
      to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
      Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions 
      of Lorem Ipsum.`,
      brand: "NIKE",
      gender: "WOMEN",
      category: "RUNNING",
      size :[6,7,8,9,10],
      color:["White", "Blue", "Black"],
      price: 130,
      is_in_inventory: false,
      items_left : 3,
      imageURL: "/assets/images/shoeImage5.jpg",
      slug: "nike-air-zoom"
     }
  ];
  totalProductCount = this.products.length;
  totalProductInStock = this.products.filter(p => p.is_in_inventory === true).length;
  totalProductOutOfStock = this.products.filter(p => p.is_in_inventory === false).length;
}
