import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { BreadCrumbsComponent } from '../bread-crumbs/bread-crumbs.component';
import { DataTableComponent } from '../data-table/data-table.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    NavigationComponent,
    BreadCrumbsComponent,
    DataTableComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ToastrModule.forRoot()
  ]
})
export class HomeModule { }
