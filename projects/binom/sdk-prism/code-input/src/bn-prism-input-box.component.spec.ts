import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnPrismInputBoxComponent } from './bn-prism-input-box.component';

describe('BnPrismInputBoxComponent', () => {
  let component: BnPrismInputBoxComponent;
  let fixture: ComponentFixture<BnPrismInputBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnPrismInputBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnPrismInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
