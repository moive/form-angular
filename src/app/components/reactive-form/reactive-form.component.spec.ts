import { FormBuilder } from '@angular/forms';

import { ReactiveFormComponent } from './reactive-form.component';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;

  beforeEach(() => {
    component = new ReactiveFormComponent(new FormBuilder());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with 3 fields: project, hours and technologies', () => {
    const form = component.myForm;

    const project = form.get('project');
    const hours = form.get('hours');
    const technologies = form.get('technologies');

    expect(project).toBeTruthy();
    expect(hours).toBeTruthy();
    expect(technologies).toBeTruthy();
  });

  it('should verify that the project field accepts a minimum of 3 caracters', () => {
    const form = component.myForm;

    const project = form.get('project');

    project?.setValue('abc');

    expect(project?.valid).toBeTruthy();
  });

  it('should verify that the project field accepts a maximum of 15 caracters', () => {
    const form = component.myForm;

    const project = form.get('project');

    project?.setValue('abcasdjfklsjdfksdfsd');

    expect(project?.valid).toBeFalse();
  });
});
