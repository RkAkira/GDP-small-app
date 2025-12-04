import { Routes } from '@angular/router';
import { GdpListComponent } from './features/gdp/gdp-list/gdp-list';
import { App } from './app';
import { NotFoundComponent } from './shared/components/not-found/not-found';

export const routes: Routes = [
    { path: 'gdp/list', component: GdpListComponent },
    { path: '', redirectTo: '/gdp/list', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
];
