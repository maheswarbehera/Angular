import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FashionViewComponent } from './fashion-view/fashion-view.component';
import { FashionComponent } from './fashion/fashion.component';
import { LaptopViewComponent } from './laptop-view/laptop-view.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
  {
    path:"laptop",
    component:LaptopComponent
  },
  {
    path:"laptop-view",
    component:LaptopViewComponent
  },
  {
    path:"mobile",
    component:MobileComponent
  },
  {
    path:"mobile-view",
    component:MobileViewComponent
  },
  {
    path:"fashion",
    component:FashionComponent
  },
  {
    path:"fashion-view",
    component:FashionViewComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
