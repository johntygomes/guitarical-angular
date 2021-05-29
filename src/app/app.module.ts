import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';


import { WebcamModule } from 'ngx-webcam';
import { DisplayComponent } from './display/display.component';
import { CameraComponent } from './camera/camera.component';

import {SharedService} from './shared/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    WebcamModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
