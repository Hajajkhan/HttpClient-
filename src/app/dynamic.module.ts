import { NgModule } from '@angular/core';
import { RouterModule, Routes, ParamMap } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableDataComponent } from './table-data/table-data.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';
import { TododetailComponent } from './tododetail/tododetail.component';


const routes:Routes=[
    {
        path: '',
        component: TableDataComponent,
    },
    {
        path: 'table-data',
        component: TableDataComponent,
    },
    // {
        // path: '',
        // component: NavbarComponent,
    // },
    {
        path: 'titles',
        component: TitleComponent,
    },
    {
        path: 'table-data/:id',
        component: TododetailComponent,
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule, 
        FormsModule],
    exports: [
        RouterModule,
    ],
    declarations: [
  ],
  })
  export class AppRoutingModule {}