import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasPromocoes } from './minhas-promocoes';

describe('MinhasPromocoes', () => {
  let component: MinhasPromocoes;
  let fixture: ComponentFixture<MinhasPromocoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhasPromocoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhasPromocoes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
