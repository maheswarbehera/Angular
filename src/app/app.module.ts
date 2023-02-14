import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { FashionComponent } from './fashion/fashion.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';
import { LaptopViewComponent } from './laptop-view/laptop-view.component';
import { FashionViewComponent } from './fashion-view/fashion-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LaptopComponent,
    MobileComponent,
    FashionComponent,
    AboutComponent,
    ContactComponent,
    MobileViewComponent,
    LaptopViewComponent,
    FashionViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
