import { Routes } from '@angular/router';
import { AutoDetailComponent } from './components/auto-detail/auto-detail.component';
import { AutoFormComponent } from './components/auto-form/auto-form.component';
import { HomeComponent } from './screens/home/home.component';
import { AutoListComponent } from './components/auto-list/auto-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'productos', component: AutoListComponent },
    { path: 'producto/:id', component: AutoDetailComponent },
    { path: 'nuevo-auto', component: AutoFormComponent },
    { path: 'editar-auto/id', component: AutoFormComponent },
    { path: '**', redirectTo: '' },
];
