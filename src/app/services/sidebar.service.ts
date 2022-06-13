import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  sidebar$ = new BehaviorSubject<boolean>(false);
  constructor() { }
}
