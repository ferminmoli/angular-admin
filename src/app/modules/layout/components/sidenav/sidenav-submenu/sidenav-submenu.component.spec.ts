import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideNavSubmenuComponent } from './sidenav-submenu.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

describe('SideNavSubmenuComponent', () => {
  let component: SideNavSubmenuComponent;
  let fixture: ComponentFixture<SideNavSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavSubmenuComponent, AngularSvgIconModule.forRoot(), HttpClientModule],
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
