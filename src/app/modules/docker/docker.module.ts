import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { IndexComponent } from './index/index.component';

const dockerRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path : 'new', component: NewComponent }
];

@NgModule({
  declarations: [
    NewComponent,
    IndexComponent
  ],
  imports: [
    RouterModule.forChild(dockerRoutes)
  ],
  providers: [],
})
export class DockerModule { }
