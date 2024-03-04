import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsCardContainerComponent } from './credits-card-container.component';

describe('CreditsCardContainerComponent', () => {
  let component: CreditsCardContainerComponent;
  let fixture: ComponentFixture<CreditsCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditsCardContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditsCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
