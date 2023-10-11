import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CopyAComponent } from './demo/copy/copy-a/copy-a.component';
import { CopyBComponent } from './demo/copy/copy-b/copy-b.component';
import { CopyComponent } from './demo/copy/copy/copy.component';
import { ReuseAComponent } from './demo/reuse/reuse-a/reuse-a.component';
import { ReuseComponent } from './demo/reuse/reuse/reuse.component';
import { DataComponent } from './demo/rxjs/data/data.component';
import { SharedAComponent } from './demo/shared/shared-a/shared-a.component';
import { SharedBComponent } from './demo/shared/shared-b/shared-b.component';
import { SharedComponent } from './demo/shared/shared/shared.component';
import { ConditionalComponent } from './pages/conditional/conditional.component';
import { InterpolationComponent } from './pages/interpolation/interpolation.component';
import { LoopsComponent } from './pages/loops/loops.component';
import { PageComponent } from './shared/page/page.component';
import { BasicComponent } from './demo/basic/basic.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    InterpolationComponent,
    ConditionalComponent,
    LoopsComponent,
    SharedBComponent,
    SharedAComponent,
    SharedComponent,
    CopyComponent,
    CopyAComponent,
    CopyBComponent,
    ReuseComponent,
    ReuseAComponent,
    DataComponent,
    BasicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
