import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { NgToastModule } from 'ng-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildingMaterialsComponent } from './components/LIBRARY/building-materials/building-materials.component';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/BUILDING OBJECT/DIALOGS/dialog-building-materials/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { BuildingObjectComponent } from './components/BUILDING OBJECT/building-object/building-object.component';
import { DivisionalStructuresComponent } from './components/BUILDING OBJECT/divisional-structures/divisional-structures.component';
import { LeftContainerComponent } from './components/BUILDING OBJECT/left-container/left-container.component';
import { BuildingParametersComponent } from './components/BUILDING OBJECT/building-parameters/building-parameters.component';
import { DialogDivisionalStructureComponent } from './components/BUILDING OBJECT/DIALOGS/dialog-divisional-structure/dialog-divisional-structure.component';
import { LoginComponent } from './components/ACCOUNT/login/login.component';
import { SignupComponent } from './components/ACCOUNT/signup/signup.component';
import { NgConfirmModule} from 'ng-confirm-box';
import { BuildingInformationComponent } from './components/BUILDING OBJECT/building-information/building-information.component';
import { DialogBuildingInformationComponent } from './components/BUILDING OBJECT/DIALOGS/dialog-building-information/dialog-building-information.component';
import { DialogBuildingParametersComponent } from './components/BUILDING OBJECT/DIALOGS/dialog-building-parameters/dialog-building-parameters.component';
import { WindowsComponent } from './components/LIBRARY/windows/windows.component';
import { DoorsComponent } from './components/LIBRARY/doors/doors.component';
import { DialogDoorComponent } from './components/BUILDING OBJECT/DIALOGS/dialog-door/dialog-door.component';
import { DialogWindowComponent } from './components/BUILDING OBJECT/DIALOGS/dialog-window/dialog-window.component';
import { FloorOnTheGroundComponent } from './components/BUILDING OBJECT/floor-on-the-ground/floor-on-the-ground.component';
import { DialogFloorOnTheGroundComponent } from './components/BUILDING OBJECT/DIALOGS/dialog-floor-on-the-ground/dialog-floor-on-the-ground.component';
import { EnergyDemandComponent } from './components/ENERGY DEMAND/energy-demand/energy-demand.component';
import { LeftContainerEnergyDemandComponent } from './components/ENERGY DEMAND/left-container-energy-demand/left-container-energy-demand.component';
import { ClimaticDataComponent } from './components/ENERGY DEMAND/climatic-data/climatic-data.component';
import { HeatLossCoefficientByTransmissionComponent } from './components/ENERGY DEMAND/heat-loss-coefficient-by-transmission/heat-loss-coefficient-by-transmission.component';
import { HeatLossCoefficientByVentilationComponent } from './components/ENERGY DEMAND/heat-loss-coefficient-by-ventilation/heat-loss-coefficient-by-ventilation.component';
import { HeatLossByTransmissionAndVentilationComponent } from './components/ENERGY DEMAND/heat-loss-by-transmission-and-ventilation/heat-loss-by-transmission-and-ventilation.component';
import { HeatGainsFromSolarRadiationComponent } from './components/ENERGY DEMAND/heat-gains-from-solar-radiation/heat-gains-from-solar-radiation.component';
import { InternalHeatGainsComponent } from './components/ENERGY DEMAND/internal-heat-gains/internal-heat-gains.component';
import { AnnualDemandForUsableEnergyComponent } from './components/ENERGY DEMAND/annual-demand-for-usable-energy/annual-demand-for-usable-energy.component';
import { UsefulHeatDemandForDomesticHotWaterComponent } from './components/ENERGY DEMAND/useful-heat-demand-for-domestic-hot-water/useful-heat-demand-for-domestic-hot-water.component';
import { DemandForUsableAndFianlEnergyComponent } from './components/ENERGY DEMAND/demand-for-usable-and-final-energy/demand-for-usable-and-final-energy.component';
import { DemandForUsableAndFinalEnergyForPreparationOfDomesticHotWaterComponent } from './components/ENERGY DEMAND/demand-for-usable-and-final-energy-for-preparation-of-domestic-hot-water/demand-for-usable-and-final-energy-for-preparation-of-domestic-hot-water.component';
import { FinalEnergyDemandForLightingComponent } from './components/ENERGY DEMAND/final-energy-demand-for-lighting/final-energy-demand-for-lighting.component';
import { AnnualDemandForAuxiliaryEnergyComponent } from './components/ENERGY DEMAND/annual-demand-for-auxiliary-energy/annual-demand-for-auxiliary-energy.component';
import { AnnualDemandForPrimaryFinalUsableEnergyComponent } from './components/ENERGY DEMAND/annual-demand-for-primary-final-usable-energy/annual-demand-for-primary-final-usable-energy.component';
import { BuildingEnergyPerformanceCertificateComponent } from './components/ENERGY DEMAND/building-energy-performance-certificate/building-energy-performance-certificate.component';
import { HeatDemandForDomesticHotWaterPreparationComponent } from './components/ENERGY DEMAND/heat-demand-for-domestic-hot-water-preparation/heat-demand-for-domestic-hot-water-preparation.component';
import { PowerForHeatingComponent } from './components/OPERATING COSTS/power-for-heating/power-for-heating.component';
import { AnnualEnergyCostComponent } from './components/OPERATING COSTS/annual-energy-cost/annual-energy-cost.component';
import { MaterialCostsComponent } from './components/INVESTMENT COSTS/material-costs/material-costs.component';
import { LabourCostsComponent } from './components/INVESTMENT COSTS/labour-costs/labour-costs.component';
import { OperatingCostsComponent } from './components/OPERATING COSTS/operating-costs/operating-costs.component';
import { LeftContainerOperatingCostsComponent } from './components/OPERATING COSTS/left-container-operating-costs/left-container-operating-costs.component';
import { InvestmentCostsComponent } from './components/INVESTMENT COSTS/investment-costs/investment-costs.component';
import { LeftContainerInvestmentCostsComponent } from './components/INVESTMENT COSTS/left-container-investment-costs/left-container-investment-costs.component';
import { CostAnalysisComponent } from './components/COST ANALYSIS/cost-analysis/cost-analysis.component';
import { LeftContainerCostAnalysisComponent } from './components/COST ANALYSIS/left-container-cost-analysis/left-container-cost-analysis.component';
import { LccComponent } from './components/COST ANALYSIS/lcc/lcc.component';
import { NvpComponent } from './components/COST ANALYSIS/nvp/nvp.component';
import { ProjectComponent } from './components/PROJECTS/project/project.component';
import { LeftContainerProjectComponent } from './components/PROJECTS/left-container-project/left-container-project.component';
import { DialogProjectsComponent } from './components/PROJECTS/DIALOGUES/dialog-projects/dialog-projects.component';
import { LibraryComponent } from './components/LIBRARY/library/library.component';
import { LeftContainerLibraryComponent } from './components/LIBRARY/left-container-library/left-container-library.component';
import { ProjectSettingsComponent } from './components/PROJECTS/PROJECT-DASHBOARD/project-settings/project-settings.component';


// import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BuildingMaterialsComponent,
    DialogComponent,
    BuildingObjectComponent,
    DivisionalStructuresComponent,
    LeftContainerComponent,
    BuildingParametersComponent,
    DialogDivisionalStructureComponent, 
    LoginComponent,   
    SignupComponent, 
    BuildingInformationComponent, 
    DialogBuildingInformationComponent,
    DialogBuildingParametersComponent,
    WindowsComponent,
    DoorsComponent,
    DialogDoorComponent,
    DialogWindowComponent,
    FloorOnTheGroundComponent,
    DialogFloorOnTheGroundComponent,
    EnergyDemandComponent,
    LeftContainerEnergyDemandComponent,
    ClimaticDataComponent,
    HeatLossCoefficientByTransmissionComponent,
    HeatLossCoefficientByVentilationComponent,
    HeatLossByTransmissionAndVentilationComponent,
    HeatGainsFromSolarRadiationComponent,
    InternalHeatGainsComponent,
    AnnualDemandForUsableEnergyComponent,
    UsefulHeatDemandForDomesticHotWaterComponent,
    DemandForUsableAndFianlEnergyComponent,
    DemandForUsableAndFinalEnergyForPreparationOfDomesticHotWaterComponent,
    FinalEnergyDemandForLightingComponent,
    AnnualDemandForAuxiliaryEnergyComponent,
    AnnualDemandForPrimaryFinalUsableEnergyComponent,
    BuildingEnergyPerformanceCertificateComponent,
    HeatDemandForDomesticHotWaterPreparationComponent,
    PowerForHeatingComponent,
    AnnualEnergyCostComponent,
    MaterialCostsComponent,
    LabourCostsComponent,
    OperatingCostsComponent,
    LeftContainerOperatingCostsComponent,
    InvestmentCostsComponent,
    LeftContainerInvestmentCostsComponent,
    CostAnalysisComponent,
    LeftContainerCostAnalysisComponent,
    LccComponent,
    NvpComponent,
    ProjectComponent,
    LeftContainerProjectComponent,
    DialogProjectsComponent,
    LibraryComponent,
    LeftContainerLibraryComponent,
    ProjectSettingsComponent
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    NgToastModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule,
    MatSelectModule,
    NgConfirmModule


  ],
  providers: [ 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 