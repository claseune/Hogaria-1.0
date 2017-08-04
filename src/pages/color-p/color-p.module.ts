import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColorPPage } from './color-p';

@NgModule({
  declarations: [
    ColorPPage,
  ],
  imports: [
    IonicPageModule.forChild(ColorPPage),
  ],
  exports: [
    ColorPPage
  ]
})
export class ColorPPageModule {}
