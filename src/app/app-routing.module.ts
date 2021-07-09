import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';

import { LoginComponentComponent } from './login-component/login-component.component';
import { MedicineDetailsComponentComponent } from './medicine-details-component/medicine-details-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';

const routes: Routes = [
	{ path: '', component: LoginComponentComponent  },
	{ path: 'signup', component: SignupComponentComponent },
	{ path: 'medicine-details', component: MedicineDetailsComponentComponent },
	{path: 'dashboard', component: DashboardComponentComponent}
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
