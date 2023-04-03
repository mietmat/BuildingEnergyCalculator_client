import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingMaterialsComponent } from './components/building-materials/building-materials.component';
import { BuildingObjectComponent } from './components/building-object/building-object.component';
import { DivisionalStructuresComponent } from './components/divisional-structures/divisional-structures.component';
import { BuildingParametersComponent } from './components/building-parameters/building-parameters.component';

const routes: Routes = [
  {
    path:'materials',
    component: BuildingMaterialsComponent
  },
  {
    path:'building-object',
    component: BuildingObjectComponent
  },
  {
    path:'divisional-structures',
    component: DivisionalStructuresComponent
  },
  {
    path:'building-parameters',
    component: BuildingParametersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
