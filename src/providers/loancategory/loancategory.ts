import { Injectable } from '@angular/core';
import { resolve } from 'path';

@Injectable()
export class LoancategoryProvider {
  private categories:any
  
  constructor() {
    console.log('Hello LoancategoryProvider Provider');
  }

  getCategories() {
    return new Promise((resolve,reject) => {
      resolve(
        this.categories = [
          {
            id:3007,
            description:"SaccoDev",
            shortname:"SaccoDev"
          },
          {
            id:3008,
            description:"SaccoExpress",
            shortname:"SaccoExpress"
          },
          {
            id:3009,
            description:"SaccoMicro",
            shortname:"SaccoMicro"
          },  
          {
            id:3010,
            description:"SaccoSmart",
            shortname:"SaccoSmart"
          },     
          {
            id:3011,
            description:"SaccoEducation",
            shortname:"SaccoEducation"
          },  
          {
            id:3012,
            description:"SaccoSuper",
            shortname:"SaccoSuper"
          },   
          {
            id:3013,
            description:"SaccoAsset",
            shortname:"SaccoAsset"
          },  
          {
            id:3021,
            description:"KaribuLoan",
            shortname:"KaribuLoan"
          }, 
          {
            id:3022,
            description:"BoreshaLoan",
            shortname:"BoreshaLoan"
          }
        ]
      )
    })
  }

}
