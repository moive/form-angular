import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from '../components/reactive-form/reactive-form.component';

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [CommonModule],
  exports: [ReactiveFormComponent],
})
export class ReactiveFormModule {}
