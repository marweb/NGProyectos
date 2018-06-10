import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectComponent } from './components/project/project.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { TestComponent } from './components/test/test.component';

//Services
import { ProjectService } from './services/project.service';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SearchPipe } from './pipes/search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    NavComponent,
    OrderByPipe,
    SearchPipe,
    ProjectComponent,
    ProyectoComponent,
    HomeComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "home", pathMatch: 'full' },
      { path: "home", component: HomeComponent },
      { path: "projects", component: ProjectListComponent },
      { path: "projects/add", component: ProjectComponent },
      { path: "projects/edit/:id", component: ProjectComponent },
      { path: "project/view/:id", component: ProyectoComponent },
      { path: '**', component: HomeComponent }
    ])
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
