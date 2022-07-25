import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormTemplate } from './interface.Form';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  technologyInputElement!: ElementRef<HTMLInputElement>;

  title: string = 'Template Form';

  initializeForm = {
    project: '',
    hours: 0,
    technology: '',
  };

  technologies: Array<string> = [];

  projects: FormTemplate[] = [];

  @ViewChild('myForm') myForm!: NgForm;

  @ViewChild('technologyInput') set inputElRef(
    elRef: ElementRef<HTMLInputElement>
  ) {
    if (elRef) {
      this.technologyInputElement = elRef;
      // this.technologyInputElement.nativeElement.focus();
    }
  }

  constructor() {}

  ngOnInit(): void {}

  save() {
    if (this.myForm.invalid) return;

    this.projects.push({
      project: this.myForm.controls['project'].value,
      hours: this.myForm.controls['hours'].value,
      technologies: this.technologies,
    });
    console.log(this.projects);

    this.clear();
  }

  clear() {
    this.myForm.resetForm();
    this.technologies = [];
  }

  addTechnology() {
    if (this.initializeForm.technology == '') return;

    this.technologies.push(this.myForm.controls['technology'].value);
    console.log(this.technologies);

    this.myForm.resetForm({
      ...this.myForm.value,
      technology: '',
    });
    this.technologyInputElement.nativeElement.focus();
  }
}
