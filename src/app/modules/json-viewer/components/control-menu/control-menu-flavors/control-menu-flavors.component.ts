import { Component, OnInit } from '@angular/core';
import { FLAVOR } from '../../../../../core/enums/flavors.enum';

@Component({
  selector: 'app-control-menu-flavors',
  templateUrl: './control-menu-flavors.component.html',
  styleUrls: ['./control-menu-flavors.component.css']
})
export class ControlMenuFlavorsComponent implements OnInit {
  flavors = FLAVOR;
  selectedFlavor = FLAVOR.JSON;
  constructor() { }

  ngOnInit() {
  }

  isFlavorSelected(flavor: FLAVOR) {
    if (typeof this.selectedFlavor === 'string') {
      return this.selectedFlavor === flavor.toString();
    }
    return this.flavors[this.selectedFlavor] === flavor.toString();
  }

  selectFlavor(flavor: FLAVOR) {
    this.selectedFlavor = flavor;
  }
}
