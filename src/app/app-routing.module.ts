import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkModule } from './work/work.module';
import { AboutComponent } from './about/about.component';

//初期ページを/workページにリダイレクトする
const routes: Routes = [
  { path: "", redirectTo: "works", pathMatch: "full" },
  { path: "about", component: AboutComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), WorkModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
