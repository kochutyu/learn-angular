import {IMobileBase, IMobileResponse} from "../interfaces/mobile";

export class Mobile implements IMobileBase {
  id: number;
  createdAt: Date;
  isDefaultConfig?: boolean;
  isLocked?: boolean;
  isActive?: boolean;
  homeScreenImgUrl?: string;
  type?: 'samsung' | 'iphone' | '';

  constructor(params: IMobileResponse) {
    this.id = params.id || 0;
    this.createdAt = new Date(params.createdAt || '');
    this.isDefaultConfig = !!params.isDefaultConfig;
    this.isLocked = !!params.isLocked;
    this.isActive = !!params.isActive;
    this.homeScreenImgUrl = params.homeScreenImgUrl || '';
    this.type = params.type || '';
  }
}
