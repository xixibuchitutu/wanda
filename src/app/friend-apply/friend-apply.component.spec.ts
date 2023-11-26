import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendApplyComponent } from './friend-apply.component';

describe('FriendApplyComponent', () => {
  let component: FriendApplyComponent;
  let fixture: ComponentFixture<FriendApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendApplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
