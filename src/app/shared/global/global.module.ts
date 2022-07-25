import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from 'src/app/components/data-table/data-table.component';

@NgModule({
  declarations: [DataTableComponent],
  imports: [CommonModule],
  exports: [DataTableComponent],
})
export class GlobalModule {}
