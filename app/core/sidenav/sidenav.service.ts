import { Injectable, OnInit, OnDestroy } from '@angular/core';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class SidenavService implements OnDestroy{

  private opened: boolean;
  private stateSource = new BehaviorSubject<boolean>(null);

  state$ = this.stateSource.asObservable();

  sidenavSubscription: Subscription = this.state$.subscribe(state => {
      this.sidenavOpened = state;
  });

  sidenavOpened: boolean;

  ngOnDestroy() {
    this.sidenavSubscription.unsubscribe();
  }

  changeState(newState: boolean) {
    this.stateSource.next(newState);
  }


}