import { Injectable, OnDestroy, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SideNavChildItem } from 'src/app/shared/models/side-nav-child-item.model';
import { SideNavItem } from 'src/app/shared/models/side-nav-item.model';

@Injectable({
  providedIn: 'root',
})
export class SideNavService implements OnDestroy {
  private showSidebar = signal(true);
  private pagesMenu = signal<SideNavItem[]>([]);
  private subscription = new Subscription();

  private pages: SideNavItem[] = [
    {
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-bar-square.svg',
          label: 'Dashboard',
          route: '/dashboard',
          children: [{ label: 'Sales', route: '/dashboard/sales' }],
        },
      ],
    },
    {
      items: [
        {
          icon: 'assets/icons/heroicons/outline/link.svg',
          label: 'Pages',
          route: '/pages',
          children: [
            { label: 'Sign up', route: '/pages/sign-up' },
            { label: 'Sign in', route: '/pages/sign-in' },
            { label: 'Not found', route: '/pages/not-found' },
          ],
        },
      ],
    },
  ];

  constructor(private router: Router) {
    this.pagesMenu.set(this.pages);

    const sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.pagesMenu().forEach(menu => {
          let activeGroup = false;
          menu.items.forEach(subMenu => {
            const active = this.isActive(subMenu.route);
            subMenu.expanded = active;
            subMenu.active = active;
            if (active) activeGroup = true;
            if (subMenu.children) {
              this.expand(subMenu.children);
            }
          });
          menu.active = activeGroup;
        });
      }
    });
    this.subscription.add(sub);
  }

  get showSideBar() {
    return this.showSidebar();
  }
  getPagesMenu() {
    return this.pagesMenu();
  }

  set showSideBar(value: boolean) {
    this.showSidebar.set(value);
  }

  public toggleSidebar() {
    this.showSidebar.set(!this.showSidebar());
  }

  public toggleMenu(menu: any) {
    this.showSideBar = true;
    menu.expanded = !menu.expanded;
  }

  public toggleSubMenu(submenu: SideNavChildItem) {
    submenu.expanded = !submenu.expanded;
  }

  private expand(items: Array<any>) {
    items.forEach(item => {
      item.expanded = this.isActive(item.route);
      if (item.children) this.expand(item.children);
    });
  }

  private isActive(instruction: any): boolean {
    return this.router.isActive(this.router.createUrlTree([instruction]), {
      paths: 'subset',
      queryParams: 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
