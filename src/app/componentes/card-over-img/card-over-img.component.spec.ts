import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOverImgComponent } from './card-over-img.component';

describe('CardOverImgComponent', () => {
  let component: CardOverImgComponent;
  let fixture: ComponentFixture<CardOverImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOverImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOverImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
