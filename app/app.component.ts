import { Component } from '@angular/core';

import { OutputComponent, LeftPanelComponent, SplashComponent, NavbarComponent } from './components/shared/index';

@Component({
    selector: 'app-component',
    templateUrl: 'app/app.component.html'
})
export class AppComponent { 
    title: string = 'Skeleton Angular 2 App';
    tab1: string = 'Output';
    tab2: string = 'Settings';
}
