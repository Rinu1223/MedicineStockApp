import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { MedicineDetailsComponentComponent } from './medicine-details-component/medicine-details-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { AddStockComponent } from './add-stock/add-stock.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponentComponent,
		SignupComponentComponent,
		MedicineDetailsComponentComponent,
		DashboardComponentComponent,
  AddStockComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
      ReactiveFormsModule,
    HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
