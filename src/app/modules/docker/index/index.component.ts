import { Component, OnInit } from '@angular/core';
import { DockerService } from '../../../services/docker.service';
import { DockerFile } from '../../../objects/dockerfile';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  dockerFiles: DockerFile[];
  errorMessages: any;
  constructor(
    private dockerService: DockerService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getDockerFiles();
  }

  getDockerFiles() {
    this.dockerService.getDockerFiles()
    .subscribe(
      dockerFiles => this.dockerFiles = dockerFiles,
      errorMesage => this.errorMessages = <any> errorMesage
    );
  }

  deleteDockerFile(event, id: number) {
    this.dockerService.deleteDockerFile(id)
    .subscribe(
      successMessage => {
        console.log(successMessage);
        this.getDockerFiles();
      },
      errorMesage => console.log(errorMesage)
    );
  }
}
