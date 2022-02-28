import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './dynamic.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { TableDataComponent } from './table-data/table-data.component';
import { TitleComponent } from './title/title.component';
import { TododetailComponent } from './tododetail/tododetail.component';


@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    NavbarComponent,
    TitleComponent,
    TododetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
