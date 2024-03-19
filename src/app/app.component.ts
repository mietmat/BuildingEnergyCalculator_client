import { Component } from '@angular/core';
import { ProjectModelService } from './services/project-model.service';
import { SolutionService } from './services/solution.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BuildingEnergyCalculator';
  projectName: string;
  solutionName: string = "";

  constructor(private projectService: ProjectModelService, private solutionService: SolutionService) {
    this.projectName = this.projectService.getProjectName();
    this.solutionName = this.solutionService.getSolutionName();
  }

}
