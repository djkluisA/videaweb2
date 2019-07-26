import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compartido/home/home.component';
import { ManitasComponent } from './compartido/body/manitas/manitas.component';
import { FontaneriaComponent } from './compartido/body/fontaneria/fontaneria.component';
import { ElectricidadComponent } from './compartido/body/electricidad/electricidad.component';
import { GasComponent } from './compartido/body/gas/gas.component';
import { ReformasComponent } from './compartido/body/reformas/reformas.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'manitas', component: ManitasComponent },
    { path: 'fontaneria', component: FontaneriaComponent },
    { path: 'electricidad', component: ElectricidadComponent },
    { path: 'gas', component: GasComponent },
    { path: 'reformas', component: ReformasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);