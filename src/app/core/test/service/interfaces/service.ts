import {Observable} from "rxjs";
import {Mobile} from "../models/mobile";

export interface IBaseService { // 3 service = 1 service + 2 service
  create(data: Record<string | number, any>): Observable<unknown>;
  update(id: string | number, data: Record<string, unknown>): Observable<unknown>;
  delete(id: string | number): Observable<unknown>;
}

export interface IBaseUserService extends IBaseService { // 1 service [UserService]
  updatePhoto?(file: unknown): Observable<unknown>;
}

export interface IBaseMobileService extends IBaseService { // 2 service [IphoneService, SamsungService]
  unlock(mobile: Mobile): Observable<unknown>;
  lock(mobile: Mobile): Observable<unknown>;

  updateHomeScreen(mobile: Mobile): Observable<unknown>;
  powerOffDevice(mobile: Mobile): Observable<unknown>;
  powerOnDevice(mobile: Mobile): Observable<unknown>;
  resetDevice(mobile: Mobile): Observable<unknown>;
}
