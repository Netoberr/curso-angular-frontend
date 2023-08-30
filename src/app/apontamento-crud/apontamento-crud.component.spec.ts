import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApontamentoCrudComponent } from './apontamento-crud.component';

describe('ApontamentoCrudComponent', () => {
  let component: ApontamentoCrudComponent;
  let fixture: ComponentFixture<ApontamentoCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApontamentoCrudComponent]
    });
    fixture = TestBed.createComponent(ApontamentoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
