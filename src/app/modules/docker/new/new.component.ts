import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  rForm: FormGroup;
  dockerFile: any;
  baseimages: string[] = ['ubuntu:16.04', 'ubuntu:14.04', 'node'];

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'title': [null, Validators.required],
      'description': [null, Validators.required],
      'baseimage': [null, Validators.required]
    });
   }

  ngOnInit() {
  }

  createDockerFile(dockerFile) {
    console.log(dockerFile);
  }

}
