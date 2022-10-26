import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoOverviewComponent } from './to-do-overview.component';

describe('ToDoOverviewComponent', () => {
  let component: ToDoOverviewComponent;
  let fixture: ComponentFixture<ToDoOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
