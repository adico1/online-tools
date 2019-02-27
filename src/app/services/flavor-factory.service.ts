import { Injectable } from '@angular/core';
import * as BSON from 'bson';

@Injectable({
  providedIn: 'root'
})
export class FlavorFactoryService {
  private flavors = {
    'JSON': { stringify: JSON.stringify, parse: JSON.parse },
    'BSON': { stringify: BSON.serialize, parse: BSON.deserialize }
  };
  constructor() { }


  createFlavorProcessor(flavor) {
    return this.flavors[flavor];
  }
}
