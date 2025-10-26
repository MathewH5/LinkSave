import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPromocao } from './cadastro-promocao';

describe('CadastroPromocao', () => {
  let component: CadastroPromocao;
  let fixture: ComponentFixture<CadastroPromocao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroPromocao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPromocao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
