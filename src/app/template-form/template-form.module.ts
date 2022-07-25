import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from '../components/template-form/template-form.component';
import { FormsModule } from '@angular/forms';
import { GlobalModule } from '../shared/global/global.module';

@NgModule({
  declarations: [TemplateFormComponent],
  imports: [CommonModule, FormsModule, GlobalModule],
  exports: [TemplateFormComponent],
})
export class TemplateFormModule {}
