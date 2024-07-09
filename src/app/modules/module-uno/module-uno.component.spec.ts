import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleUnoComponent } from './module-uno.component';

describe('ModuleUnoComponent', () => {
  let component: ModuleUnoComponent;
  let fixture: ComponentFixture<ModuleUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleUnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
