import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap, startWith } from 'rxjs/operators';
import { TransferState, makeStateKey, StateKey } from '@angular/platform-browser';

const USER_KEY = makeStateKey<any>('user');

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  user$: any;
  constructor(
    private seo: SeoService,
    private af: AngularFirestore,
    private route: ActivatedRoute,
    private state: TransferState,
  ) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');

    this.user$ = this.ssrFireStoreDoc(`users/${name}`);
    // this.user = this.seo.getUser(id);
  }

  ssrFireStoreDoc(path: string) {
    const exists = this.state.get(USER_KEY, {} as any);

    return this.af.doc<any>(path)
    .valueChanges()
    .pipe(
      tap(user => {
        this.state.set(USER_KEY, user);
        this.seo.generateTags({
          title: user.name,
          description: user.desc
        });
        console.log('user', user);
      }),
      startWith(exists)
    );

  }
}
