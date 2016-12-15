import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';

import { AppComponent }  from './app.component';

import { OutputComponent, SettingsComponent, SplashComponent, LeftPanelComponent, NavbarComponent } from './components/shared/index';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
        {
          path: '',
          component: SplashComponent
        },
        {
          path: 'output',
          component: OutputComponent
        },
        {
          path: 'settings',
          component: SettingsComponent
        },
        {
          path: 'leftpanel',
          component: LeftPanelComponent
        },
        {
          path: 'navbar',
          component: NavbarComponent
        }
      ]) 
    ],
  declarations: [ AppComponent, OutputComponent, SettingsComponent, LeftPanelComponent, SplashComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ HttpModule ]
})
export class AppModule { }
