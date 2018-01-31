import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DockerService } from '../../../services/docker.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  rForm: FormGroup;
  dockerFile: any;
  baseimages: string[] = ['ubuntu:16.04', 'ubuntu:14.04', 'node'];

  constructor(
    private fb: FormBuilder,
    private dockerService: DockerService,
    private router: Router,
  ) {
    this.rForm = fb.group({
      'title': [null, Validators.required],
      'description': [null, Validators.required],
      'base_image': [null, Validators.required]
    });
   }

  ngOnInit() {
  }

  createDockerFile(dockerFile) {
    console.log(dockerFile);
    this.dockerService.createDockerFile(dockerFile)
    .subscribe(
      successMessage => {
        console.log(successMessage);
        this.router.navigateByUrl('/docker');

      },
      errorMesage => console.log(errorMesage)
    );
  }

}
