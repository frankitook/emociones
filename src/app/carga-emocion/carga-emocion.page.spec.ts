import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargaEmocionPage } from './carga-emocion.page';

describe('CargaEmocionPage', () => {
  let component: CargaEmocionPage;
  let fixture: ComponentFixture<CargaEmocionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaEmocionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
