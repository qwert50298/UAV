"use strict";
export class PageingModel {
  currentPage:Number;
  countPerPage:Number;
  totalCount:Number;
  totalPage:Number;
  dispPaging:Array<Number>;

  constructor(){
    this.currentPage = 1;
    this.countPerPage = 20;
    this.totalCount = 0;
    this.totalPage = 0;
    this.dispPaging = []
  }
  reset(){
    this.currentPage = 1;
    this.countPerPage = 20;
    this.totalCount = 0;
    this.totalPage = 0;
    this.dispPaging = []
  }
}
