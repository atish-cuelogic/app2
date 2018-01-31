import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewComponent } from './new/new.component';
import { IndexComponent } from './index/index.component';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { DockerService } from '../../services/docker.service';
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
    RouterModule.forChild(dockerRoutes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
  ],
  providers: [DockerService],
})
export class DockerModule { }
