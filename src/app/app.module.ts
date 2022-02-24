import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TableDataComponent } from './table-data/table-data.component';
import { DataFetchingComponent } from './data-fetching/data-fetching.component';
import { TableIdComponent } from './table-id/table-id.component';
import { TableTitleComponent } from './table-title/table-title.component';

@NgModule({
  declarations: [
    AppComponent,
    TableDataComponent,
    DataFetchingComponent,
    TableIdComponent,
    TableTitleComponent,
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
