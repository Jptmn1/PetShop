import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesProdComponent } from './detalhes-prod.component';

describe('DetalhesProdComponent', () => {
  let component: DetalhesProdComponent;
  let fixture: ComponentFixture<DetalhesProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
