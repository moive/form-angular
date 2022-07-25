import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from '../components/reactive-form/reactive-form.component';
import { GlobalModule } from '../shared/global/global.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [CommonModule, GlobalModule, ReactiveFormsModule],
  exports: [ReactiveFormComponent],
})
export class ReactiveFormModule {}
