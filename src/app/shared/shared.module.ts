import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BannerComponent } from '../components/banner/banner.component';

const exportArray = [
  HeaderComponent,
  SidebarComponent,
  BannerComponent
]

@NgModule({
  declarations: [
    exportArray
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    exportArray
  ]
})
export class SharedModule { }
