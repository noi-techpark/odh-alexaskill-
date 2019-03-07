import { SkillBuilders } from "ask-sdk-core";

import * as Intents from "./intents";
import * as Interceptor from "./interceptors";
import * as Errors from "./errors";

export const handler = SkillBuilders.custom()
  .addRequestHandlers(
    //Intents.Debug,

    // Default intents
    Intents.LaunchHandler,
    Intents.HelpHandler,
    Intents.StopHandler,
    Intents.SessionEndedHandler,

    // Event intents
    Intents.EventHandler,
    Intents.LoadMoreHandler
  )
  .addRequestInterceptors(
    Interceptor.LocalizationInterceptor,
    Interceptor.Slots
  )
  .addErrorHandlers(
    Errors.Unknown,
    Errors.Unexpected
  )
  .lambda();