import { NgModule } from '@angular/core';
import { WorksDetailComponent } from './works-detail/works-detail.component';
import { WorklistComponent } from './worklist/worklist.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';

//パスとコンポーネントを対応させる。pathに応じたcomponentがrouter-outletに出力される
const routes: Routes = [
  {
    path: "works", component: WorkComponent,
    children:[
      { path: "", component: WorklistComponent },
      { path: ":workId", component: WorksDetailComponent }
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
