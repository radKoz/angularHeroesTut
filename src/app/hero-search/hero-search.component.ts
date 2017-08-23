import { HeroSearchService } from './../hero-search.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';


import 'rxjs/add/observable/of'

// obs operators

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Hero } from './../hero';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { }

    search(term: string):void {
      this.searchTerms.next(term)
    }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300) //wait 300ms after pressing any button
      .distinctUntilChanged() //ignore if next search is the same as before
      .switchMap(term => term // switch to new observable each time term changes 
      //return http search observable
    ? this.heroSearchService.search(term)
    // or if there was no search return observable of empty heroes
    : Observable.of<Hero[]>([]))
    .catch(error => {
      console.log(error);
      return Observable.of<Hero[]>([])
    });
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
