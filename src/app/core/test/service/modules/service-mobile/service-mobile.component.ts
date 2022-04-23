import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";
import {Mobile} from "../../models/mobile";
import {SamsungService} from "../../services/samsung.service";
import {IBaseMobileService} from "../../interfaces/service";

const ELEMENT_DATA: Mobile[] = [
  new Mobile({
    id: 0,
    isActive: true,
    type: 'iphone',
  }),
  new Mobile({
    id: 1,
    isActive: false,
    type: 'samsung',
    isDefaultConfig: false,
    createdAt: new Date().toDateString(),
    homeScreenImgUrl: '',
    isLocked: false
  }),
  new Mobile({
    id: 2,
    isActive: false,
    type: 'iphone',
    isDefaultConfig: true,
    createdAt: new Date().toDateString(),
    homeScreenImgUrl: '',
    isLocked: true
  })
];

@Component({
  selector: 'app-service-mobile',
  templateUrl: './service-mobile.component.html',
  styleUrls: ['./service-mobile.component.scss']
})
export class ServiceMobileComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'createdAt', 'isDefaultConfig', 'isLocked', 'isActive', 'homeScreenImgUrl', 'type', 'serviceName'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(
    private samsungService: SamsungService,
    private iphoneService: SamsungService,
  ) {
  }

  ngAfterViewInit() {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  changeLocked(mobile: Mobile) {
    const service = this.getMobileService(mobile);

    if (!service) return;

    if (mobile.isLocked) {
      service.lock(mobile).subscribe(console.log);
    } else {
      service.unlock(mobile).subscribe(console.log);
    }
  }

  changeActive(mobile: Mobile) {
    const service = this.getMobileService(mobile);

    if (!service) return;

    if (mobile.isActive) {
      service.powerOffDevice(mobile).subscribe(console.log);
    } else {
      service.powerOnDevice(mobile).subscribe(console.log);
    }
  }

  getMobileService(mobile: Mobile): IBaseMobileService | null {
    switch (mobile.type) {
      case "iphone":
        return this.iphoneService;
      case "samsung":
        return this.samsungService;
      default:
        return null;
    }
  }
}
