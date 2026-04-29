import { Routes } from '@angular/router';
import { PaisComponent } from './components/pais-component/pais-component';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: PaisComponent },
];


