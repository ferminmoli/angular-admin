import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
  standalone: true,
  imports: [NgClass, RouterLink],
})
export class ProfileMenuComponent {
  public isMenuOpen = false;

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
