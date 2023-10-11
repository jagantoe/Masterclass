import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './demo/basic/basic.component';
import { CopyComponent } from './demo/copy/copy/copy.component';
import { ReuseComponent } from './demo/reuse/reuse/reuse.component';
import { DataComponent } from './demo/rxjs/data/data.component';
import { SharedComponent } from './demo/shared/shared/shared.component';

const routes: Routes = [
  {
    path: "demo",
    children: [
      {
        path: "basic",
        component: BasicComponent
      },
      {
        path: "shared",
        component: SharedComponent
      },
      {
        path: "copy",
        component: CopyComponent
      },
      {
        path: "reuse",
        component: ReuseComponent
      },
      {
        path: "rxjs",
        component: DataComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "demo/basic"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
