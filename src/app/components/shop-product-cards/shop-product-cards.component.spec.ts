import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductCardsComponent } from './shop-product-cards.component';

describe('ShopProductCardsComponent', () => {
  let component: ShopProductCardsComponent;
  let fixture: ComponentFixture<ShopProductCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopProductCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopProductCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
