module.exports = {
  "extensions": {
    "pinterest-conversion-tracking": {
      "displayName": "Pinterest Conversion Tracking",
      "settings": {
        "tagid": "2612711284501"
      }
    }
  },
  "dataElements": {
    "CurrencyCode": {
      "settings": {
        "name": "CurrencyCode"
      },
      "cleanText": true,
      "forceLowerCase": false,
      "modulePath": "sandbox/localStorage.js",
      "storageDuration": ""
    },
    "Purchase ID (Date + PNR)": {
      "settings": {
        "name": "PurchaseID"
      },
      "cleanText": false,
      "forceLowerCase": false,
      "modulePath": "sandbox/localStorage.js",
      "storageDuration": ""
    },
    "FlightSearch: NumberOfpass": {
      "settings": {
        "name": "FlightSearch"
      },
      "cleanText": true,
      "forceLowerCase": false,
      "modulePath": "sandbox/localStorage.js",
      "storageDuration": ""
    }
  },
  "rules": [{
    "id": "RL1636588223040",
    "name": "Load Base Code",
    "events": [{
      "modulePath": "sandbox/pageTop.js",
      "settings": {}
    }],
    "actions": [{
      "modulePath": "pinterest-conversion-tracking/src/lib/actions/loadBaseCode.js",
      "settings": {}
    }, {
      "modulePath": "sandbox/logEventInfo.js",
      "settings": {}
    }]
  }, {
    "id": "RL1636588276477",
    "name": "Send viewCategory event",
    "events": [{
      "modulePath": "sandbox/click.js",
      "settings": {}
    }],
    "actions": [{
      "modulePath": "pinterest-conversion-tracking/src/lib/actions/sendViewCategoryEvent.js",
      "settings": {
        "currency": "%CurrencyCode%",
        "promo_code": "PROMOCODE"
      }
    }]
  }],
  "property": {
    "name": "Sandbox property",
    "settings": {
      "id": "PR12345",
      "domains": ["adobe.com", "example.com"],
      "undefinedVarsReturnEmpty": false
    }
  },
  "company": {
    "orgId": "ABCDEFGHIJKLMNOPQRSTUVWX@AdobeOrg"
  },
  "buildInfo": {
    "turbineVersion": "27.2.0",
    "turbineBuildDate": "2021-11-11T20:43:30.228Z",
    "buildDate": "2021-11-11T20:43:30.228Z",
    "environment": "development"
  }
}