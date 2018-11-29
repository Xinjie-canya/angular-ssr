import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const FETCH_URL = 'https://www.mocky.io/v2/5c0011db3200000e00b28690';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  users$: Observable<any>;
  constructor(
    private http: HttpClient,
  ) {
    this.users$ = this.http.get(FETCH_URL);
  }

  ngOnInit() {
  }

}
