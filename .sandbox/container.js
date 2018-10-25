module.exports = {
  "dataElements": {},
  "rules": [{
    "id": "RL1540493165782",
    "name": "Top",
    "events": [{
      "modulePath": "sandbox/pageTop.js",
      "settings": {}
    }],
    "actions": [{
      "modulePath": "pinterest-conversion-tracking/src/lib/actions/sendPageVisitEvent.js",
      "settings": {
        "order_id": "",
        "currency": "",
        "value": "",
        "search_query": "",
        "video_title": "",
        "property": "",
        "line_items": "",
        "order_quantity": "",
        "lead_type": "",
        "promo_code": ""
      }
    }]
  }],
  "extensions": {
    "pinterest-conversion-tracking": {
      "displayName": "Pinterest Conversion Tracking",
      "settings": {
        "tagid": "2612711284501"
      }
    }
  },
  "property": {
    "settings": {}
  },
  "buildInfo": {
    "turbineVersion": "25.1.3",
    "turbineBuildDate": "2018-10-25T18:46:16.288Z",
    "buildDate": "2018-10-25T18:46:16.288Z",
    "environment": "development"
  }
}