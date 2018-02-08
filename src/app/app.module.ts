import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AsideComponent } from './aside/aside.component';
import { CvCopyComponent } from './cv-copy/cv-copy.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AsideComponent,
    CvCopyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
