/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KupotholimComponent } from './kupotholim.component';

describe('KupotholimComponent', () => {
  let component: KupotholimComponent;
  let fixture: ComponentFixture<KupotholimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KupotholimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KupotholimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
