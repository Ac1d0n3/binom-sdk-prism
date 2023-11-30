import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnPrismBoxComponent } from './bn-prism-box.component';

describe('BnPrismBoxComponent', () => {
  let component: BnPrismBoxComponent;
  let fixture: ComponentFixture<BnPrismBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnPrismBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnPrismBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
