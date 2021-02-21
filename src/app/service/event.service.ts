import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Event} from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private list: Event[] = [
    {
      name: 'The only 25+ Bar Tour',
      date: '02-27-2021',
      time: '8pm',
      location: {
        country: 'Hungary',
        city: 'Budapest',
        address: '20 Király utca'
      }
    },
    {
      name: 'Dragonfly Yoga Flow',
      date: '03-09-2021',
      time: '7pm',
      location: {
        country: 'Hungary',
        city: 'Budapest',
        address: '1 Margit Körút'
      }
    },
    {
      name: 'Queen Elizabeth Lookout Tower Tour',
      date: '02-21-2021',
      time: '10am',
      location: {
        country: 'Hungary',
        city: 'Budapest',
        address: 'Széll Kálmán tér'
      }
    },
  ];

  list$: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);

  constructor() { }

  getAll(): BehaviorSubject<Event[]> {
    this.list$.next(this.list);
    return this.list$;
  }
}
