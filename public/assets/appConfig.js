// set your account sid here
var accountSid = "AC82c2886c2b7e3955e7bc46017456543e";


var appConfig = {
  // SSO enabled - points to NSS Twilio account with new OKTA configuration
  sso: {
    accountSid: "AC82c2886c2b7e3955e7bc46017456543e"
  },
  sdkOptions: {
    worker: {
      logLevel: "error"
    },
    insights: {
      logLevel: "error"
    },
    chat: {
      logLevel: "error"
    },
    flex: {
      logger: {
        level: "error"
      }
    },
    voice: {
      debug: false
    }
  }
}