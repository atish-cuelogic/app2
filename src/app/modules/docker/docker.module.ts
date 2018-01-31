import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DockerComponent } from './docker.component';
import { NewComponent } from './new/new.component';

const dockerRoutes: Routes = [
  { path: '', component: DockerComponent },
  { path : 'new', component: NewComponent }
];

@NgModule({
  declarations: [
    DockerComponent,
    NewComponent
  ],
  imports: [
    RouterModule.forChild(dockerRoutes)
  ],
  providers: [],
})
export class DockerModule { }
