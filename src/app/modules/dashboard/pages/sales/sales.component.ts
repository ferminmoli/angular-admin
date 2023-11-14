import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { DashboardCardItemComponent } from 'src/app/shared/components/dashboard-card-item/dashboard-card-item.component';
import { DashboardItem } from 'src/app/shared/models/dashboard-item.model';
import { User } from 'src/app/shared/models/user';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  standalone: true,
  imports: [NgFor, DashboardCardItemComponent, AngularSvgIconModule],
})
export class SalesComponent implements OnInit {
  items = new Array<DashboardItem>();
  users = new Array<User>();

  ngOnInit() {
    this.items.push({
      title: 'Online Users',
      value: 56,
      unit: '%',
    });
    this.items.push({
      title: 'Offline users',
      value: 32,
      unit: '%',
    });
    this.items.push({
      title: 'Cities',
      value: 12,
      unit: '%',
    });

    this.users.push({
      name: 'Steven Jobs',
      avatar:
        'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg',
      email: 'steven.jobs@mail.com',
      role: 'Developer',
      tags: ['software', 'it', 'design'],
    });
    this.users.push({
      name: 'Steven Jobs',
      avatar:
        'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg',
      email: 'steven.jobs@mail.com',
      role: 'Developer',
      tags: ['software', 'it', 'design'],
    });
    this.users.push({
      name: 'Steven Jobs',
      avatar:
        'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg',
      email: 'steven.jobs@mail.com',
      role: 'Developer',
      tags: ['software', 'it', 'design'],
    });
  }

  deleteUser(user: User): void {
    console.log(user);
  }

  editUser(user: User): void {
    console.log(user);
  }
}
