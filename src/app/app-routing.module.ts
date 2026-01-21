import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';

const routes: Routes = [
  { path: 'pipes-demo', component: PipesDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
