import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {
  projects: Array<any> = [];
  errorMessage: any;
  currentId: number = 0;

  searchText: string ='';
  
  constructor( private _projectService : ProjectService,
               private _router: Router,
               private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(this._activatedRoute.snapshot.params["id"])
      this.currentId = parseInt(this._activatedRoute.snapshot.params["id"]);
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
        data => this.projects = data,
        error => { debugger;
          this.errorMessage = error
        }
    )
  }

  add(){
    this._router.navigate(['projects/add']);
  }
  edit(id){
    this._router.navigate(['projects/edit/' + id])
  }
  delete(id){
    var ans = confirm("Desea eliminar el proyecto con el Id: " + id);
    if(ans){
      this._projectService.deleteProject(id)
          .subscribe(  data=> {
            window.location.reload();
          }, error=> this.errorMessage = error )
    }
  }
}
