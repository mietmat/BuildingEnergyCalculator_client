import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingMaterialsComponent } from './components/building-materials/building-materials.component';
import { BuildingObjectComponent } from './components/building-object/building-object.component';
import { DivisionalStructuresComponent } from './components/divisional-structures/divisional-structures.component';
import { BuildingParametersComponent } from './components/building-parameters/building-parameters.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BuildingInformationComponent } from './components/building-information/building-information.component';
import { DoorsComponent } from './components/doors/doors.component';
import { WindowsComponent } from './components/windows/windows.component';

const routes: Routes = [
  // {
  //   path:'', redirectTo:'building-energy/login', pathMatch:'full',
  // },
  {
    path:'building-energy/login',
    component: LoginComponent
  },
  {
    path:'building-energy/signup',
    component: SignupComponent
  },
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
  {
    path:'building-information',
    component: BuildingInformationComponent
  },
  {
    path:'doors',
    component: DoorsComponent
  },
  {
    path:'windows',
    component: WindowsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
