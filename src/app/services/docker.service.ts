import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response  } from '@angular/http';
import 'rxjs/add/operator/map';
import { DockerFile } from '../objects/dockerfile';

@Injectable()
export class DockerService {

  constructor(private _http: Http) { }

  getDockerFiles(): Observable<DockerFile[]> {
    return this._http
    .get('https://cors-anywhere.herokuapp.com/https://40e8c659.ngrok.io/dockerfiles')
    .map((response: Response) => <DockerFile[]> response.json());
  }

}
