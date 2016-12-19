import { Component, Input } from '@angular/core';
import { Router }           from '@angular/router';
import { NG2D3Module } from 'ng2d3';
import { single, multi } from './shared/data.model';

@Component({
    selector: 'splash-component',
    templateUrl: 'app/components/splash.component.html',
})

export class SplashComponent{
single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  // line, area
  autoScale = true;
  
  constructor() {
    Object.assign(this, {single, multi})   
  }
  

}
