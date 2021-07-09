import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponentComponent } from './login-component/login-component.component';
import { MedicineDetailsComponentComponent } from './medicine-details-component/medicine-details-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';

const routes: Routes = [
	{ path: '', component: LoginComponentComponent  },
	{ path: 'signup', component: SignupComponentComponent },
	{ path: 'medicine-details', component: MedicineDetailsComponentComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
