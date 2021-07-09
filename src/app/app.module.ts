import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { MedicineDetailsComponentComponent } from './medicine-details-component/medicine-details-component.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponentComponent,
		SignupComponentComponent,
		MedicineDetailsComponentComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
