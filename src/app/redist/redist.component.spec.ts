import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedistComponent } from './redist.component';

describe('RedistComponent', () => {
  let component: RedistComponent;
  let fixture: ComponentFixture<RedistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
