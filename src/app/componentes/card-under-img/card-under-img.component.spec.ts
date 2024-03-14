import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUnderImgComponent } from './card-under-img.component';

describe('CardMediumComponent', () => {
  let component: CardUnderImgComponent;
  let fixture: ComponentFixture<CardUnderImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUnderImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUnderImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
