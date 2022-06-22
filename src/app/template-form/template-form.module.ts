import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from '../components/template-form/template-form.component';

@NgModule({
  declarations: [TemplateFormComponent],
  imports: [CommonModule],
  exports: [TemplateFormComponent],
})
export class TemplateFormModule {}