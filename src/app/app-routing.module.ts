import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HuongdanComponent} from './huongdan/huongdan.component';
import {SanphamComponent} from './sanpham/sanpham.component';
import {LoginComponent} from './login/login.component';
import {GioithieuComponent} from './gioithieu/gioithieu.component'
const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'huongdan',component:HuongdanComponent},
  {path: 'sanpham',component:SanphamComponent},
  {path: 'login',component:LoginComponent},
  {path: 'gioithieu',component:GioithieuComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }