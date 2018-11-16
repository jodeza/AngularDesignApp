import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BodyComponent } from './body/body.component';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatTableModule, MatToolbarModule, MatPaginatorModule } from '@angular/material';
import { MatDialogModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTablesModule,
    MaterialModule,
    CommonModule, 
    MatToolbarModule,
    MatInputModule, 
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  exports: [
    CommonModule, 
    MatToolbarModule, 
    MatInputModule, 
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
