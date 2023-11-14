import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideNavSubmenuComponent } from './sidenav-submenu.component';

describe('SideNavSubmenuComponent', () => {
  let component: SideNavSubmenuComponent;
  let fixture: ComponentFixture<SideNavSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavSubmenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
