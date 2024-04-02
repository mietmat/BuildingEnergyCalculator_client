import { Component } from '@angular/core';
import { SolutionService } from '../../../services/solution.service';

@Component({
  selector: 'app-left-container',
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.css']
})
export class LeftContainerComponent {
  solutionId: any;

  constructor(private solutionService: SolutionService) { }

  ngOnInit(): void {
    this.solutionId = this.solutionService.getSolutionId();
    console.log("Current solId:", this.solutionId);

  }


}
