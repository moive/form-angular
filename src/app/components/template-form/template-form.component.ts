import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormTemplate } from './interface.Form';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  title: string = 'Template Form';

  initializeForm: FormTemplate = {
    project: '',
    hours: '',
    technology: '',
  };

  model: FormTemplate = this.initializeForm;

  @ViewChild('myForm') myForm!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  save() {
    console.log('save', this.myForm);
  }

  clear() {
    this.myForm.resetForm(this.initializeForm);
  }
}
