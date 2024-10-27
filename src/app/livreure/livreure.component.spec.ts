import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreureComponent } from './livreure.component';

describe('LivreureComponent', () => {
  let component: LivreureComponent;
  let fixture: ComponentFixture<LivreureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
