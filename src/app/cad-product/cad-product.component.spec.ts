import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadProductComponent } from './cad-product.component';

describe('CadProductComponent', () => {
  let component: CadProductComponent;
  let fixture: ComponentFixture<CadProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
