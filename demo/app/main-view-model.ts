import { Observable } from 'tns-core-modules/data/observable';
import { Onfido } from 'nativescript-onfido';

export class HelloWorldModel extends Observable {
  public message: string;
  private onfido: Onfido;

  constructor() {
    super();

    this.onfido = new Onfido();
    this.message = this.onfido.message;
  }
}
