import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParentComponent } from './list-parent.component';

describe('ListParentComponent', () => {
  let component: ListParentComponent;
  let fixture: ComponentFixture<ListParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
