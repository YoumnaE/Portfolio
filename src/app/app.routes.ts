import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home').then(m => m.Home)
    },
    {
        path: 'about',
        loadComponent: () => import('./components/about/about').then(m => m.About)
    },
    {
        path: 'projs',
        loadComponent: () => import('./components/gprojects/gprojects').then(m => m.Gprojects)
    },
    {
        path: 'coffeeandstories',
        loadComponent: () => import('./components/projects/coffeeandstories/coffeeandstories').then(m => m.Coffeeandstories)
    },
    {
        path: 'scentsbyyara',
        loadComponent: () => import('./components/projects/scentsbyyara/scentsbyyara').then(m => m.Scentsbyyara)
    }
];
