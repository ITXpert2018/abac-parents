import { Injectable } from '@angular/core';
import { Child } from 'src/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  private myChilds: Child[];

  constructor() {

  }

  getMyChilds() {
    return this.myChilds;
  }

  setMyChilds(childs: Child[]) {
    this.myChilds = childs;
  }

  addChild(child: Child) {
    this.myChilds.push(child);
  }

  refreshMyChilds() {
    this.myChilds = [];
  }


}
