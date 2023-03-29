import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingMaterialsComponent } from './components/building-materials/building-materials.component';

const routes: Routes = [
  {
    path:'materials',
    component: BuildingMaterialsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
