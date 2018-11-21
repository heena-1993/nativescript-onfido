import * as app from 'tns-core-modules/application';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';

declare var ONFlowConfig: any;
declare var ONFlow: any;
declare var ONFaceStepVariantPhoto: any;

class OnfidoMain {
  private _settings: any;
  private _config: any;
  private _configBuilder: any;
  private _configError = new interop.Reference();
  private _runError: any = new interop.Reference(); 
  private _onFlow: any;
  private _onfidoController: any;

  constructor(settings: any) {
    this._settings = settings;
  }

  setup() {
    return new Promise((resolve, reject) => {
      this._configBuilder = ONFlowConfig.builder();
  
      this._configBuilder.withToken(this._settings.token);
      this._configBuilder.withApplicantId(this._settings.applicantId);
      this._configBuilder.withDocumentStep();
      this._configBuilder.withFaceStepOfVariant(ONFaceStepVariantPhoto);
      
      this._config = this._configBuilder.buildAndReturnError(this._configError);
        
      if (this._configError.value === null) {
        this._onFlow = ONFlow.alloc().initWithFlowConfiguration(this._config);
        this._onFlow.withResponseHandler(this._settings.responseHandler);
        this._onfidoController = this._onFlow.runAndReturnError(this._runError);
        
        if (this._runError.value == null) {
          resolve(this._onfidoController);
        } else {
          reject(this._runError.value);
        } 
      } else {
        reject(this._configError.value);
      }
    });
  }
}

export class Onfido extends StackLayout {
  public set settings(settings: any) {
    new OnfidoMain(settings)
      .setup()
      .then((onfido: UIViewController) => {
        this.rootVC().presentViewControllerAnimatedCompletion(onfido, true, null);
      }).catch((error: string) => {
        console.log(`[nativescript-onfido]: ERROR: ${error}`);
      });
  }

  rootVC() {  
    let appWindow = UIApplication.sharedApplication.keyWindow;
    return appWindow.rootViewController;
  }
}
