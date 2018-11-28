import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private af: AngularFirestore,
  ) { }

  getPosts(): Observable<any[]> {
    return this.af.collection('posts').valueChanges();
  }
}
