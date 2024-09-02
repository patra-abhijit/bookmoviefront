import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMovieComponent } from './user-movie.component';

describe('UserMovieComponent', () => {
  let component: UserMovieComponent;
  let fixture: ComponentFixture<UserMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
