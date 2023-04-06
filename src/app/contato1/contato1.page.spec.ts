import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contato1Page } from './contato1.page';

describe('Contato1Page', () => {
  let component: Contato1Page;
  let fixture: ComponentFixture<Contato1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Contato1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
