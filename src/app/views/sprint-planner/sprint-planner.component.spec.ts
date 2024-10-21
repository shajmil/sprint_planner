import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintPlannerComponent } from './sprint-planner.component';

describe('SprintPlannerComponent', () => {
  let component: SprintPlannerComponent;
  let fixture: ComponentFixture<SprintPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SprintPlannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SprintPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
