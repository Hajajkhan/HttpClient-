import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFetchingComponent } from './data-fetching.component';

describe('DataFetchingComponent', () => {
  let component: DataFetchingComponent;
  let fixture: ComponentFixture<DataFetchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataFetchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFetchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
