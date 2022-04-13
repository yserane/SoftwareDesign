import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItemModalComponent } from './post-item-modal.component';

describe('PostItemModalComponent', () => {
  let component: PostItemModalComponent;
  let fixture: ComponentFixture<PostItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostItemModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
