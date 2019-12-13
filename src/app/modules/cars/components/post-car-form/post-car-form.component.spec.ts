import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCarFormComponent } from './post-car-form.component';

describe('PostCarFormComponent', () => {
  let component: PostCarFormComponent;
  let fixture: ComponentFixture<PostCarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
