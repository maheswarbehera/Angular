import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {

  menfashionList = [
    {
      "id":1,
      "name":"t-shirt",
      "brand":"ADIDAS",
      "color":"navy blue",
      "price":660,
      "size":"s",
      "image":"https://rukminim1.flixcart.com/image/800/960/kplisnk0/t-shirt/e/s/a/m-askpqrgf639644-allen-solly-original-imag3spzbmfd75cg.jpeg?q=50"
    },
    {
      "id":2,
      "name":"shirt",
      "brand":"Allen Solly",
      "color":"white",
      "price":890,
      "size":"m",
      "image":"https://rukminim1.flixcart.com/image/800/960/kfmv9u80-0/shirt/p/p/m/40-assfwmofe06955-allen-solly-original-imafwfn4qyfuz5cz.jpeg?q=50"
    },
    {
      "id":3,
      "name":"paint",
      "brand":"Allen Solly",
      "color":"blue",
      "price":250,
      "size":"m",
      "image":"https://rukminim1.flixcart.com/image/800/960/xif0q/short/l/o/5/34-1-hlv8000070-highlander-original-imafvz8r2gjaqt75-bb.jpeg?q=50"
    },
    {
      "id":4,
      "name":"tracks",
      "brand":"VeBNoR ",
      "color":"black",
      "price":450,
      "size":"L",
      "image":"https://rukminim1.flixcart.com/image/800/960/xif0q/track-pant/v/y/r/s-combo-tr1-vebnor-original-imagcgf9cqsgzwvb-bb.jpeg?q=50"
    }
  ]

  womenfashionList = [
    {
      "id":1,
      "name":"saree",
      "brand":"DHRUVI TRENDZ",
      "color":"pink",
      "price":660,
      "size":"s",
      "image":"https://m.media-amazon.com/images/I/619cbp-6mAL._UY741_.jpg"
    },
    {
      "id":2,
      "name":"Selvia Women Dress",
      "brand":"Selvia",
      "color":"red",
      "price":250,
      "size":"m",
      "image":"https://m.media-amazon.com/images/I/71Pg0IjMoPL._UY741_.jpg"
    },
    {
      "id":3,
      "name":"jeans",
      "brand":"FITG18 Store",
      "color":"black",
      "price":350,
      "size":"m",
      "image":"https://m.media-amazon.com/images/I/61dr8iY4+TL._UY879_.jpg"
    },
    {
      "id":4,
      "name":"Women Tops",
      "brand":"Lymio Store ",
      "color":"green",
      "price":450,
      "size":"L",
      "image":"https://m.media-amazon.com/images/I/61CD7jRIVRL._UY741_.jpg"
    }
  ]

  
  constructor() { }

  ngOnInit(): void {
  }

}
