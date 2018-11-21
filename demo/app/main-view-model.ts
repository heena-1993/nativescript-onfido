import { Observable } from 'tns-core-modules/data/observable';

export class HelloWorldModel extends Observable {
  public onfidoSettings: any;

  constructor() {
    super();

    this.onfidoSettings = {
      applicantId: "YOUR_APPLICANT_ID",
      token: "YOUR_SDK_TOKEN",
      enable: true,
      responseHandler: (response: any) => {
        if (response.userCanceled) {  
          // Flow cancelled by the user
        } else if (response.results) {
          // User completed the flow
          // You can create your check here
        } else if (response.error) {
          // Some error happened
        }
      } 
    };
  }
}
