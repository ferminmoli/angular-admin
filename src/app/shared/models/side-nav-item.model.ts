import { SideNavChildItem } from './side-nav-child-item.model';

export class SideNavItem {
  selected?: boolean;
  active?: boolean;
  items: Array<SideNavChildItem> = new Array<SideNavChildItem>();
  icon?: string;
  expanded?: boolean;
}
