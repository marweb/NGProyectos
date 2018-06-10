import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  projects: Array<any> = [];
  errorMessage: any;

  constructor( private _projectService : ProjectService,
               private _router: Router,
               private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
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

  view(id){
    this._router.navigate(['project/view/' + id])
  }

}
