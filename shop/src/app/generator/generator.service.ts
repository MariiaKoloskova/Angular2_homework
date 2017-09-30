import { Injectable, Inject } from '@angular/core';

@Injectable()
export class GeneratorService {

  constructor() { }

  returnSequence(length:number):string {
    var sequence = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < length; i++)
    sequence += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return sequence;
  }
}
