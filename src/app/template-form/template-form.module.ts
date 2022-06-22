import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from '../components/template-form/template-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TemplateFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [TemplateFormComponent],
})
export class TemplateFormModule {}
