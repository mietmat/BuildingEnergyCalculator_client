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
import { BuildingMaterialsComponent } from './components/building-materials/building-materials.component';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { BuildingObjectComponent } from './components/building-object/building-object.component';
import { DivisionalStructuresComponent } from './components/divisional-structures/divisional-structures.component';
import { LeftContainerComponent } from './components/left-container/left-container.component';
import { BuildingParametersComponent } from './components/building-parameters/building-parameters.component';
import { DialogDivisionalStructureComponent } from './components/dialog-divisional-structure/dialog-divisional-structure.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgConfirmModule} from 'ng-confirm-box';
import { BuildingInformationComponent } from './components/building-information/building-information.component';
import { DialogBuildingInformationComponent } from './components/dialog-building-information/dialog-building-information.component';
import { DialogBuildingParametersComponent } from './components/dialog-building-parameters/dialog-building-parameters.component';
import { WindowsComponent } from './components/windows/windows.component';
import { DoorsComponent } from './components/doors/doors.component';
import { DialogDoorComponent } from './components/dialog-door/dialog-door.component';
import { DialogWindowComponent } from './components/dialog-window/dialog-window.component';


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
 