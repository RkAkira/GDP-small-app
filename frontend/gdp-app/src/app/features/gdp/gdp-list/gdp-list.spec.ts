import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdpList } from './gdp-list';

describe('GdpList', () => {
  let component: GdpList;
  let fixture: ComponentFixture<GdpList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GdpList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdpList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
