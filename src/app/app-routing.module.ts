import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingMaterialsComponent } from './components/BUILDING OBJECT/building-materials/building-materials.component';
import { BuildingObjectComponent } from './components/BUILDING OBJECT/building-object/building-object.component';
import { DivisionalStructuresComponent } from './components/BUILDING OBJECT/divisional-structures/divisional-structures.component';
import { BuildingParametersComponent } from './components/BUILDING OBJECT/building-parameters/building-parameters.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BuildingInformationComponent } from './components/BUILDING OBJECT/building-information/building-information.component';
import { DoorsComponent } from './components/BUILDING OBJECT/doors/doors.component';
import { WindowsComponent } from './components/BUILDING OBJECT/windows/windows.component';
import { FloorOnTheGroundComponent } from './components/BUILDING OBJECT/floor-on-the-ground/floor-on-the-ground.component';
import { EnergyDemandComponent } from './components/ENERGY DEMAND/energy-demand/energy-demand.component';
import { HeatLossCoefficientByTransmissionComponent } from './components/ENERGY DEMAND/heat-loss-coefficient-by-transmission/heat-loss-coefficient-by-transmission.component';
import { HeatLossCoefficientByVentilationComponent } from './components/ENERGY DEMAND/heat-loss-coefficient-by-ventilation/heat-loss-coefficient-by-ventilation.component';

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
  {
    path:'floor-on-the-ground',
    component: FloorOnTheGroundComponent
  },
  {
    path:'energy-demand',
    component: EnergyDemandComponent
  },
  {
    path:'heat-loss-coefficient-by-transmission',
    component: HeatLossCoefficientByTransmissionComponent
  },
  {
    path:'heat-loss-coefficient-by-ventilation',
    component: HeatLossCoefficientByVentilationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
