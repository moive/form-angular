import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormTemplate } from '../template-form/interface.Form';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  title: string = 'Reactive Form';
  technologies: Array<string> = [];

  projects: FormTemplate[] = [];

  /* myForm: FormGroup = new FormGroup({
    project: new FormControl(''),
    hours: new FormControl(0),
    technology: new FormControl(''),
  }); */

  myForm: FormGroup = this.fb.group({
    project: this.fb.control(''),
    hours: this.fb.control(0),
    technologies: this.fb.control(''),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
