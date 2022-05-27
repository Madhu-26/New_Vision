import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTaskViewAllComponent } from './my-task-view-all.component';

describe('MyTaskViewAllComponent', () => {
  let component: MyTaskViewAllComponent;
  let fixture: ComponentFixture<MyTaskViewAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTaskViewAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTaskViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
