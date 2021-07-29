import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoDataComponent } from './crypto-data.component';

describe('CryptoDataComponent', () => {
  let component: CryptoDataComponent;
  let fixture: ComponentFixture<CryptoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
