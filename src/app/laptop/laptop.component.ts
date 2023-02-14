import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  laptopList = [
    {
      "id":1,
      "name":"HP 15s",
      "price":39999,
      "processor":'Core i3',
      "model":"14s-dq2606tu",
      "display":" inches",
      "storage":8,
      "brand":"Hp",
      "touchpad":true,
      "image":"https://m.media-amazon.com/images/I/81rtAL-vmwL._AC_UL320_.jpg"
    },
     {
      "id":2,
      "name":"Lenovo Ideapad 3",
      "price":42999,
      "processor":'Ryzen 5',
      "model":"82KU017KIN",
      "display":"15.6 inches",
      "storage":8,
      "brand":"Lenovo",
      "touchpad":true,
      "image":"https://m.media-amazon.com/images/I/51qo1M9M2pL._SX522_.jpg"
    },
    {
      "id":3,
      "name":"Dell Inspiron 3525 Laptop",
      "price":52999,
      "processor":"AMD Athlon Silver 3050U",
      "model":"D560766Win9Be",
      "display":"15.6 inches",
      "storage":18,
      "brand":"Dell",
      "touchpad":true,
      "image":"https://m.media-amazon.com/images/I/618AJUXg+eS._SX679_.jpg"
    },
    {
      "id":4,
      "name":"Apple MacBook Air Laptop",
      "price":90999,
      "processor":"10‑core CPU and 16‑core GPU",
      "model":"xt1723",
      "display":"16 inches",
      "storage":16,
      "brand":"Apple",
      "touchpad":true,
      "image":"https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg"
    },
    {
      "id":5,
      "name":"Acer Aspire 5 Gaming",
      "price":86999,
      "processor":"12th Gen Intel Core i5-(12 cores)",
      "model":" RTX 2050",
      "display":"15.6 inch",
      "storage":8,
      "brand":"Acer",
      "touchpad":true,
      "image":"https://images-eu.ssl-images-amazon.com/images/I/41Ls3cKVwnL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
      "id":6,
      "name":"ASUS VivoBook 14",
      "price":69999,
      "processor":" Intel Core i3-1005G1",
      "model":"xt1723",
      "display":" 14-inch",
      "storage":"8GB/1TB HDD/Windows 11",
      "brand":"Asus",
      "touchpad":true,
      "image":"https://m.media-amazon.com/images/I/716bvqzz7PL._SX679_.jpg"
    }
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
