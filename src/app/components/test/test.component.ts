import { Component, 
         OnInit, 
         ViewChild, 
         ComponentFactoryResolver,
         ViewContainerRef } from '@angular/core';
import { ProjectComponent } from '../project/project.component'
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {

  @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef;
  
  constructor(private _cfr: ComponentFactoryResolver) { }

  ngOnInit() {
    //this.addControl();
   
  }

  addControl(){
    
      var comp = this._cfr.resolveComponentFactory(ProjectComponent);
      var expComponent = this.container.createComponent(comp);
      expComponent.instance._ref = expComponent;
  }
  
}
