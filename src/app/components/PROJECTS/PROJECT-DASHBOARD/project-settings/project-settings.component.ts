import { Component } from '@angular/core';
import { SolutionService } from '../../../../services/solution.service';

@Component({
  selector: 'app-project-settings',
  templateUrl: './project-settings.component.html',
  styleUrls: ['./project-settings.component.css']
})
export class ProjectSettingsComponent {
  solutionId: number;

  constructor(private solutionService: SolutionService) {
    this.solutionId = this.solutionService.getSolutionId();
  }
}
