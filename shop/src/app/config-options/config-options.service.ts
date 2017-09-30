import { Injectable } from '@angular/core';

@Injectable()
export class ConfigOptionsService {

  constructor() { }
  settings : {};

  setSetting(paramName:string, paramValue:any){
    this.settings[paramName] = paramValue;
  }

  getSetting(paramName:string) : any{
    return this.settings[paramName];
  }
}
