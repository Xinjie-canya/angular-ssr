import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  user: any;
  constructor(
    private seo: SeoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('name');

    // this.user = this.seo.getUser(id);
  }
}
