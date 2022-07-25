import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from '../components/template-form/template-form.component';
import { FormsModule } from '@angular/forms';
import { DataTableComponent } from '../components/data-table/data-table.component';

@NgModule({
  declarations: [TemplateFormComponent, DataTableComponent],
  imports: [CommonModule, FormsModule],
  exports: [TemplateFormComponent],
})
export class TemplateFormModule {}
