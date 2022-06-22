import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';
import { TemplateFormModule } from './template-form/template-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateFormModule,
    ReactiveFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
