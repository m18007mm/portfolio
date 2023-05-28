import { NgModule } from '@angular/core';
import { WorksDetailComponent } from './works-detail/works-detail.component';
import { WorklistComponent } from './worklist/worklist.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';

const routes: Routes = [
  {
    path: "work", component: WorkComponent,
    children:[
      { path: "", component: WorklistComponent },
      { path: "detail", component: WorksDetailComponent }
    ]
  }
]

@NgModule({
  declarations: [
    WorkComponent,
    WorksDetailComponent,
    WorklistComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class WorkModule { }
