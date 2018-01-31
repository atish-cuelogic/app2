import { Component, OnInit } from '@angular/core';
import { DockerService } from '../../../services/docker.service';
import {DockerFile} from '../../../objects/dockerfile';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  dockerFiles: DockerFile[];
  errorMessages: any;
  constructor(private dockerService: DockerService) { }

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
}
