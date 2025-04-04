import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { SearchComponent } from './container/search/search.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ProductListComponent,
    SearchComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
