import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorklistComponent } from './work/worklist/worklist.component';
import { WorksDetailComponent } from './work/works-detail/works-detail.component';
import { WorkModule } from './work/work.module';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: "", redirectTo: "work", pathMatch: "full" }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), WorkModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
