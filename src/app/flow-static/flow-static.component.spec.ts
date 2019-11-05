import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowStaticComponent } from './flow-static.component';

describe('FlowStaticComponent', () => {
  let component: FlowStaticComponent;
  let fixture: ComponentFixture<FlowStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
