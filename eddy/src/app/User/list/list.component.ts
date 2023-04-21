import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users:User[];
  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getStuden()
    .subscribe(data => {
      this.users = data;
    })
  }

}
