import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductService } from './product.service';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductTracklistingComponent } from './product-tracklisting/product-tracklisting.component';
import { ProductPipe } from './product.pipe';

const appRoutes : Routes =[
  {path:'products', component:ProductListComponent },
  {path:'products/:id', component:ProductPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    ProductTracklistingComponent,
    ProductPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductService,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
