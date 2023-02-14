import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  mobileList = [
    {
      "id":1,
      "name":"Moto g60",
      "brand":"Motorola",
      "price":16999,
      "model":"xt 16372",
      "processor":"snap-775G",
      "image":"https://www.reliancedigital.in/medias/Motorola-E32-Mobile-Phone-492849904-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDU4OHxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDI1Lzk4MzQxMDkyMDY1NTguanBnfGU1NGNkMTA3ODhiYTJhZGEyNDFhMGEzZDZhNjg5NzhmZWYzM2JkNDY4NjY3MzhiZTA3MzRmM2U4OGUzMmU4Y2Q"
    },
    {
      "id":2,
      "name":"vivo v1",
      "brand":"Vivo",
      "price":12499,
      "model":"xt 16372",
      "processor":"snap-775G",
      "image":"https://images2nwck8c0zc.cdn.e2enetworks.net/sangeethaecommerce/product_image/product_list_page/img_20220429_d0c2b8559fad0203c6c49e79408b9d59.jpg"
    },
    {
      "id":3,
      "name":"poco x4",
      "brand":"Poco",
      "price":7999,
      "model":"xt 16372",
      "processor":"helio-775G",
      "image":"https://images.hindustantimes.com/tech/img/2021/07/02/960x540/image_-_2021-05-20T084832.011_1621480715307_1623139491301_1625189985574_1625189993523.jpg"
    },
    {
      "id":4,
      "name":"iphone 12",
      "brand":"Apple",
      "price":112000,
      "model":"xt7772",
      "processor":"ios",
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4-NiX_xLsvluuhNqbYQNL5A828BxeOEdBA&usqp=CAU"
    },
    {
      "id":5,
      "name":"mi 5a",
      "brand":"Redmi",
      "price":6999,
      "model":"mi-16372",
      "processor":"color-os-775G",
      "image":"https://i01.appmifile.com/webfile/globalimg/0320/TO-B/web-small-banner/Redmi-Note-11S-5G.png?width=398&height=230&160516"
    },
    {
      "id":6,
      "name":"nord c2",
      "brand":"One plus",
      "price":34999,
      "model":"one-16372",
      "processor":"snap-775G",
      "image":"https://crazylady.in/wp-content/uploads/2022/07/41o6Y2Rb_ML.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
