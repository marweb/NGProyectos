import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProjectService {
      baseUrl: string = 'http://localhost:3000/api/'

    constructor(private _http: Http) { }

    getProjects(){
      return this._http.get(this.baseUrl + 'projects')
                .map((response: Response) =>response.json())
                .catch(this._errorHandler);
    }

    getProjectById(id){
      return this._http.get(this.baseUrl +"project/"+ id)
              .map((response: Response) => response.json())
              .catch(this._errorHandler)
    }

    saveProject(project){
      return this._http.post(this.baseUrl +   'projects', project)
              .map((response: Response) => response.json())
              .catch(this._errorHandler)
    }

    editProject(project){
      return this._http.post(this.baseUrl +   'project', project)
              .map((response: Response) => response.json())
              .catch(this._errorHandler)
    }

    deleteProject(id){
      return this._http.get(this.baseUrl + "project/remove/" + id)
                .map((response:Response) =>  response.json())
                .catch(this._errorHandler)
    }

    _errorHandler(error:Response){debugger;
      console.log(error);
      return Observable.throw(error || "Internal server error");
    }
}
