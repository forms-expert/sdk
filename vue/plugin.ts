import { App } from 'vue';
import { FormsSDKConfig, FormsSDK } from '../core';

const FORMS_SDK_KEY = Symbol('forms-sdk');

/**
 * Vue plugin for Forms SDK
 */
export function createFormsPlugin(config: FormsSDKConfig) {
  const sdk = new FormsSDK(config);

  return {
    install(app: App) {
      app.provide(FORMS_SDK_KEY, sdk);
      app.config.globalProperties.$formsSDK = sdk;
    },
  };
}

export { FORMS_SDK_KEY };
