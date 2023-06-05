import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingMaterialsComponent } from './components/BUILDING OBJECT/building-materials/building-materials.component';
import { BuildingObjectComponent } from './components/BUILDING OBJECT/building-object/building-object.component';
import { DivisionalStructuresComponent } from './components/BUILDING OBJECT/divisional-structures/divisional-structures.component';
import { BuildingParametersComponent } from './components/BUILDING OBJECT/building-parameters/building-parameters.component';
import { LoginComponent } from './components/ACCOUNT/login/login.component';
import { SignupComponent } from './components/ACCOUNT/signup/signup.component';
import { BuildingInformationComponent } from './components/BUILDING OBJECT/building-information/building-information.component';
import { DoorsComponent } from './components/BUILDING OBJECT/doors/doors.component';
import { WindowsComponent } from './components/BUILDING OBJECT/windows/windows.component';
import { FloorOnTheGroundComponent } from './components/BUILDING OBJECT/floor-on-the-ground/floor-on-the-ground.component';
import { EnergyDemandComponent } from './components/ENERGY DEMAND/energy-demand/energy-demand.component';
import { HeatLossCoefficientByTransmissionComponent } from './components/ENERGY DEMAND/heat-loss-coefficient-by-transmission/heat-loss-coefficient-by-transmission.component';
import { HeatLossCoefficientByVentilationComponent } from './components/ENERGY DEMAND/heat-loss-coefficient-by-ventilation/heat-loss-coefficient-by-ventilation.component';
import { ClimaticDataComponent } from './components/ENERGY DEMAND/climatic-data/climatic-data.component';
import { HeatLossByTransmissionAndVentilationComponent } from './components/ENERGY DEMAND/heat-loss-by-transmission-and-ventilation/heat-loss-by-transmission-and-ventilation.component';
import { InternalHeatGainsComponent } from './components/ENERGY DEMAND/internal-heat-gains/internal-heat-gains.component';
import { HeatGainsFromSolarRadiationComponent } from './components/ENERGY DEMAND/heat-gains-from-solar-radiation/heat-gains-from-solar-radiation.component';

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
  {
    path:'climatic-data',
    component: ClimaticDataComponent
  },
  {
    path:'heat-loss-by-transmission-and-ventilation',
    component: HeatLossByTransmissionAndVentilationComponent
  },
  {
    path:'heat-gains-from-solar-radiation',
    component: HeatGainsFromSolarRadiationComponent
  },
  {
    path:'internal-heat-gains',
    component: InternalHeatGainsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
