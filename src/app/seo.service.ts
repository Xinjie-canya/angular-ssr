import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private af: AngularFirestore,
    private meta: Meta,
    private title: Title,

  ) { }

  getUsers(): Observable<any[]> {
    return this.af.collection('users').valueChanges();
  }

  generateTags(tags) {
    // default values
    tags = {
      title: 'title',
      description: 'description',
      image: 'image src',
      slug: 'waat',
      ...tags
    };

    // set a title
    this.title.setTitle(tags.title);

    // set meta tags
    this.meta.updateTag({name: 'name', content: tags.title});
    this.meta.updateTag({name: 'description', content: tags.description });
  }
}
