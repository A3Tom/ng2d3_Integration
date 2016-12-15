import { Component, Input } from '@angular/core';
import { Router }           from '@angular/router';

@Component({
    selector: 'navbar-component',
    templateUrl: 'app/components/navbar.component.html'
})

export class NavbarComponent{
    title: string = 'Skeleton Angular 2 App';
    tab1: string = 'Output';
    tab2: string = 'Settings';
}