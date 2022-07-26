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

  it('should verify that the hours field', () => {
    const form = component.myForm;
    const hours = form.get('hours');

    expect(hours?.valid).toBeTruthy();

    hours?.setValue(0);
    expect(hours?.invalid).toBeTruthy();

    hours?.setValue(51);
    expect(hours?.invalid).toBeTruthy();

    hours?.setValue('51');
    expect(hours?.invalid).toBeTruthy();
  });

  it('should verify add technologies', () => {
    const technologiesArray = component.technologies;
    const technologyControl = component.technology;

    technologyControl.setValue('Vue');
    component.addTechnology();

    technologyControl.setValue('Angular');
    component.addTechnology();

    expect(technologiesArray?.value.length).toBe(2);
    expect(technologiesArray?.value).toEqual(['Vue', 'Angular']);
  });
});
