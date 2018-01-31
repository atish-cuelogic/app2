import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewComponent } from './new/new.component';
import { IndexComponent } from './index/index.component';
import { CommonModule } from '@angular/common';


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
    CommonModule
  ],
  providers: [],
})
export class DockerModule { }
