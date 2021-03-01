import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-configation-user',
  templateUrl: './configation-user.component.html',
  styleUrls: ['./configation-user.component.scss']
})
export class ConfigationUserComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
