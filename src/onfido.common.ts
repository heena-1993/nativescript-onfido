import * as app from 'tns-core-modules/application';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';

export class Common extends StackLayout {
  constructor() {
    super();
    console.log("I loaded!");  
  }
}