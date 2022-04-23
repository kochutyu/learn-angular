import { Injectable } from '@angular/core';
import {IBaseMobileService} from "../interfaces/service";
import {Observable, of} from "rxjs";
import {Mobile} from "../models/mobile";

@Injectable({
  providedIn: 'root'
})
export class SamsungService implements IBaseMobileService {

  constructor() { }

  update(id: string | number, data: Record<string, unknown>): Observable<unknown> {
    return of();
  }

  create(data: Record<string | number, any>): Observable<unknown> {
    return of();
  }

  delete(id: string | number): Observable<unknown> {
    return of();
  }

  powerOffDevice(mobile: Mobile): Observable<unknown> {
    mobile.isActive = false;
    return of(mobile);
  }

  powerOnDevice(mobile: Mobile): Observable<unknown> {
    mobile.isActive = true;
    return of(mobile);
  }

  resetDevice(mobile: Mobile): Observable<unknown> {
    return of();
  }

  lock(mobile: Mobile): Observable<Mobile> {
    mobile.isLocked = false;
    return of(mobile);
  }

  unlock(mobile: Mobile): Observable<Mobile> {
    mobile.isLocked = true;
    return of(mobile);
  }

  updateHomeScreen(mobile: Mobile): Observable<unknown> {
    return of();
  }

}
