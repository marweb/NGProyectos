import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from './proyecto';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html'
})
export class ProyectoComponent implements OnInit {
  id: number = 0;
  errorMessage: any;
  _ref:any;
  title: string = "Ver Detalles";
  proyecto: Proyecto;
  constructor(
              private _avRoute: ActivatedRoute,
              private _projectService: ProjectService,
              private _router: Router) { 
    
    if(this._avRoute.snapshot.params["id"]){
      this.id = parseInt( this._avRoute.snapshot.params["id"]);
      //console.log(this.id);
    }
}

  ngOnInit() {
    if(this.id > 0){
        this._projectService.getProjectById(this.id).subscribe(
            proyecto => this.proyecto = proyecto,
            error => this.errorMessage = <any>error);
        }
    }
    onBack(): void {
        this._router.navigate(['./home']);
    }

}