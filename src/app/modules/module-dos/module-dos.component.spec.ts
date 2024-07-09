import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleDosComponent } from './module-dos.component';

describe('ModuleDosComponent', () => {
  let component: ModuleDosComponent;
  let fixture: ComponentFixture<ModuleDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleDosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
