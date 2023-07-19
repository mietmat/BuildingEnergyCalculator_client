import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingMaterialsComponent } from './components/LIBRARY/building-materials/building-materials.component';
import { BuildingObjectComponent } from './components/BUILDING OBJECT/building-object/building-object.component';
import { DivisionalStructuresComponent } from './components/BUILDING OBJECT/divisional-structures/divisional-structures.component';
import { BuildingParametersComponent } from './components/BUILDING OBJECT/building-parameters/building-parameters.component';
import { LoginComponent } from './components/ACCOUNT/login/login.component';
import { SignupComponent } from './components/ACCOUNT/signup/signup.component';
import { BuildingInformationComponent } from './components/BUILDING OBJECT/building-information/building-information.component';
import { DoorsComponent } from './components/LIBRARY/doors/doors.component';
import { WindowsComponent } from './components/LIBRARY/windows/windows.component';
import { FloorOnTheGroundComponent } from './components/BUILDING OBJECT/floor-on-the-ground/floor-on-the-ground.component';
import { EnergyDemandComponent } from './components/ENERGY DEMAND/energy-demand/energy-demand.component';
import { HeatLossCoefficientByTransmissionComponent } from './components/ENERGY DEMAND/heat-loss-coefficient-by-transmission/heat-loss-coefficient-by-transmission.component';
import { HeatLossCoefficientByVentilationComponent } from './components/ENERGY DEMAND/heat-loss-coefficient-by-ventilation/heat-loss-coefficient-by-ventilation.component';
import { ClimaticDataComponent } from './components/ENERGY DEMAND/climatic-data/climatic-data.component';
import { HeatLossByTransmissionAndVentilationComponent } from './components/ENERGY DEMAND/heat-loss-by-transmission-and-ventilation/heat-loss-by-transmission-and-ventilation.component';
import { InternalHeatGainsComponent } from './components/ENERGY DEMAND/internal-heat-gains/internal-heat-gains.component';
import { HeatGainsFromSolarRadiationComponent } from './components/ENERGY DEMAND/heat-gains-from-solar-radiation/heat-gains-from-solar-radiation.component';
import { AnnualDemandForUsableEnergyComponent } from './components/ENERGY DEMAND/annual-demand-for-usable-energy/annual-demand-for-usable-energy.component';
import { UsefulHeatDemandForDomesticHotWaterComponent } from './components/ENERGY DEMAND/useful-heat-demand-for-domestic-hot-water/useful-heat-demand-for-domestic-hot-water.component';
import { DemandForUsableAndFianlEnergyComponent} from './components/ENERGY DEMAND/demand-for-usable-and-final-energy/demand-for-usable-and-final-energy.component';
import { DemandForUsableAndFinalEnergyForPreparationOfDomesticHotWaterComponent } from './components/ENERGY DEMAND/demand-for-usable-and-final-energy-for-preparation-of-domestic-hot-water/demand-for-usable-and-final-energy-for-preparation-of-domestic-hot-water.component';
import { FinalEnergyDemandForLightingComponent } from './components/ENERGY DEMAND/final-energy-demand-for-lighting/final-energy-demand-for-lighting.component';
import { AnnualDemandForAuxiliaryEnergyComponent } from './components/ENERGY DEMAND/annual-demand-for-auxiliary-energy/annual-demand-for-auxiliary-energy.component';
import { AnnualDemandForPrimaryFinalUsableEnergyComponent } from './components/ENERGY DEMAND/annual-demand-for-primary-final-usable-energy/annual-demand-for-primary-final-usable-energy.component';
import { PowerForHeatingComponent } from './components/OPERATING COSTS/power-for-heating/power-for-heating.component';
import { AnnualEnergyCostComponent } from './components/OPERATING COSTS/annual-energy-cost/annual-energy-cost.component';
import { OperatingCostsComponent } from './components/OPERATING COSTS/operating-costs/operating-costs.component';
import { InvestmentCostsComponent } from './components/INVESTMENT COSTS/investment-costs/investment-costs.component';
import { MaterialCostsComponent } from './components/INVESTMENT COSTS/material-costs/material-costs.component';
import { LabourCostsComponent } from './components/INVESTMENT COSTS/labour-costs/labour-costs.component';
import { CostAnalysisComponent } from './components/COST ANALYSIS/cost-analysis/cost-analysis.component';
import { LeftContainerCostAnalysisComponent } from './components/COST ANALYSIS/left-container-cost-analysis/left-container-cost-analysis.component';
import { BuildingEnergyPerformanceCertificateComponent } from './components/ENERGY DEMAND/building-energy-performance-certificate/building-energy-performance-certificate.component';
import { HeatDemandForDomesticHotWaterPreparationComponent } from './components/ENERGY DEMAND/heat-demand-for-domestic-hot-water-preparation/heat-demand-for-domestic-hot-water-preparation.component';
import { LccComponent } from './components/COST ANALYSIS/lcc/lcc.component';
import { NvpComponent } from './components/COST ANALYSIS/nvp/nvp.component';
import { ProjectComponent } from './components/PROJECTS/project/project.component';
import { LibraryComponent } from './components/LIBRARY/library/library.component';
import { ProjectSettingsComponent } from './components/PROJECTS/PROJECT-DASHBOARD/project-settings/project-settings.component';

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
    path:'project-settings/building-object',
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
  {
    path:'annual-demand-for-usable-energy',
    component: AnnualDemandForUsableEnergyComponent
  },
  {
    path:'useful-heat-demand-for-hot-water-preparation',
    component: UsefulHeatDemandForDomesticHotWaterComponent
  },
  {
    path:'demand-for-usable-and-final-energy',
    component: DemandForUsableAndFianlEnergyComponent
  },
  {
    path:'demand-for-usable-and-final-energy-for-preparation-of-domestic-hot-water',
    component: DemandForUsableAndFinalEnergyForPreparationOfDomesticHotWaterComponent
  },
  {
    path:'final-energy-demand-for-lighting',
    component: FinalEnergyDemandForLightingComponent
  },
  {
    path:'annual-demand-for-auxiliary-energy',
    component: AnnualDemandForAuxiliaryEnergyComponent
  },
  {
    path:'annual-demand-for-primary-final-usable-energy',
    component: AnnualDemandForPrimaryFinalUsableEnergyComponent
  },
  {
    path:'power-for-heating',
    component: PowerForHeatingComponent
  },
  {
    path:'annual-energy-cost',
    component: AnnualEnergyCostComponent
  },
  {
    path:'operating-costs',
    component: OperatingCostsComponent
  },
  {
    path:'investment-costs',
    component: InvestmentCostsComponent
  },
  {
    path:'material-costs',
    component: MaterialCostsComponent
  },
  {
    path:'labour-costs',
    component: LabourCostsComponent
  },
  {
    path:'cost-analysis',
    component: CostAnalysisComponent
  },
  {
    path:'left-container-cost-analysis',
    component: LeftContainerCostAnalysisComponent
  },
  {
    path:'building-energy-performance-certificate',
    component: BuildingEnergyPerformanceCertificateComponent
  },
  {
    path:'heat-demand-for-domestic-hot-water-preparation',
    component: HeatDemandForDomesticHotWaterPreparationComponent
  },
  {
    path:'lcc',
    component: LccComponent
  },
  {
    path:'nvp',
    component: NvpComponent
  },
  {
    path:'project',
    component: ProjectComponent
  },
  {
    path:'library',
    component: LibraryComponent
  },
  {
    path:'project-settings',
    component: ProjectSettingsComponent
  }
 

  


  

  
  

  

  

  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
