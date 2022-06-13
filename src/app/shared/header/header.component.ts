import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SidebarService } from 'src/app/services/sidebar.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sidebar$ = this.sidebar.sidebar$;

  constructor(private sidebar:SidebarService) { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.sidebar.sidebar$.next(!this.sidebar$.value);
  }
}
