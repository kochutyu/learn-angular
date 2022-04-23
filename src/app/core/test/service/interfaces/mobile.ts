export interface IMobileResponse {
  id?: number;
  createdAt?: string;
  isDefaultConfig?: boolean;
  isLocked?: boolean;
  isActive?: boolean;
  homeScreenImgUrl?: string;
  type?: 'samsung' | 'iphone' | '';
}

export interface IMobileBase extends Omit<IMobileResponse, 'createdAt'> {
  createdAt: Date;
}
