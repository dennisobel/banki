import { Component } from '@angular/core';

/**
 * Generated class for the ComponentsFileUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'components-file-upload',
  templateUrl: 'components-file-upload.html'
})
export class ComponentsFileUploadComponent {

  text: string;

  constructor() {
    console.log('Hello ComponentsFileUploadComponent Component');
    this.text = 'Hello World';
  }

}
