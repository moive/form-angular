import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  title: string = 'Template Form';

  constructor() {}

  ngOnInit(): void {}

  save(v: any) {
    console.log('save', v);
  }
}
