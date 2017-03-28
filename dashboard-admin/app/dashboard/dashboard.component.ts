import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { SidenavService } from './core/sidenav/sidenav.service';
import { Subscription } from "rxjs/Subscription";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { MediaStateService } from './core/media-state.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnDestroy{

  private _watcher : Subscription;
  private mode = "";

  constructor(@Inject(ObservableMedia)  private _media$: any, private sidenavService: SidenavService,
    private mediaState: MediaStateService, private router: Router, private route: ActivatedRoute) {
      if (this._media$.isActive('xs')) {
        this.mode = "over";
        this.mediaState.changeState("xs");
        this.sidenavService.changeState(false);
      }
      if (this._media$.isActive('sm')) {
        this.mode = "over";
        this.mediaState.changeState("sm");
        this.sidenavService.changeState(false);
      }
      if (this._media$.isActive('md')) {
        this.mode = "side";
        this.mediaState.changeState("md");
        this.sidenavService.changeState(true);
      }
      if ((this._media$.isActive('lg')) || (this._media$.isActive('xl'))) {
        this.mode = "side";
        this.mediaState.changeState("lg");
        this.sidenavService.changeState(true);
      }
      this._watcher = this._media$.subscribe((change:MediaChange) => {
        	let value = change ? `'${change.mqAlias}' = ${change.mediaQuery} )` : "";
          if (value == "'xs' = screen and (max-width: 599px) )") {
            this.mode = "over";
            this.mediaState.changeState("xs");
            this.sidenavService.changeState(false);
          }

        	else if ( (value == "'sm' = screen and (min-width: 600px) and (max-width: 959px) )") || (value == "'gt-xs' = screen and (min-width: 600px) )") )  {
        		this.mode = "over";
            this.mediaState.changeState("sm");
        		this.sidenavService.changeState(false);
        	}

          else if (value == "'md' = screen and (min-width: 960px) and (max-width: 1279px) )") {
              this.mode = "side";
              this.mediaState.changeState("md");
              this.sidenavService.changeState(true);
          }
          else {
            this.mode = "side";
            this.mediaState.changeState("lg");
            this.sidenavService.changeState(true);
          }
      });
    }

  ngOnDestroy() {
    this._watcher.unsubscribe();
  }
}
