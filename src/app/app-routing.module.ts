import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorklistComponent } from './common/worklist/worklist.component';

const routes: Routes = [
  { path: "", component: WorklistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
