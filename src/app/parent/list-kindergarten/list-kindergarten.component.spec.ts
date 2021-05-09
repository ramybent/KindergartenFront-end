import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKindergartenComponent } from './list-kindergarten.component';

describe('ListKindergartenComponent', () => {
  let component: ListKindergartenComponent;
  let fixture: ComponentFixture<ListKindergartenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKindergartenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKindergartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
