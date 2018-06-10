import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
  projectForm: FormGroup;
  title: string = "Agregar";
  id: number = 0;
  errorMessage: any;
  submitted: boolean = false;
  _ref:any;
  constructor(private _fb: FormBuilder, 
              private _avRoute: ActivatedRoute,
              private _projectService: ProjectService,
              private _router: Router) { 
    
    if(this._avRoute.snapshot.params["id"]){
      this.id = parseInt( this._avRoute.snapshot.params["id"]);
      //console.log(this.id);
        this.title = 'Editar';
    }

    this.projectForm = this._fb.group({
      id: 0,
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      stack: ['', [Validators.required]]
    })
  }

  ngOnInit() {
    if(this.id > 0){
        this._projectService.getProjectById(this.id)
          .subscribe(resp => this.projectForm.setValue(resp)
                   , error => this.errorMessage = error);
          
    }
  }

  agregar(){
    if(!this.projectForm.valid){
      this.submitted = true;
      return;
    }
    this._projectService.saveProject(this.projectForm.value)
        .subscribe(projId => {
            //alert('Saved Successfully!')
            this._router.navigate(['projects', {id: projId}]);
         }, error => this.errorMessage = error )
    }

    save(){
        if(!this.projectForm.valid){
          this.submitted = true;
          return;
        }
        this._projectService.editProject(this.projectForm.value)
            .subscribe(projId => {
                //alert('Saved Successfully!')
                this._router.navigate(['projects', {id: projId}]);
             }, error => this.errorMessage = error )
          }

  cancel(){
    this._router.navigate(["projects", {id: this.id}]);
  }

  get name() { return this.projectForm.get('name'); }  
	get image() { return this.projectForm.get('image'); }
  get description() { return this.projectForm.get('description'); }
  get stack() { return this.projectForm.get('stack'); }

}
