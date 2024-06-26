import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeybordsComponent } from './keybords.component';

describe('KeybordsComponent', () => {
  let component: KeybordsComponent;
  let fixture: ComponentFixture<KeybordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeybordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeybordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
