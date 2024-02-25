import crypto from 'crypto';
import { Request, Response, request } from "express";
import https from 'https'
import axios from 'axios';

class Notification {
  // inject channel, external_id
  constructor(private userID: string) { }
  

  // message only
  async push(content: string) {

    await axios.request({
      url: 'https://api.onesignal.com/notifications',
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Authorization': 'Basic OTc2M2JmNjctZWVkMy00OGJjLWFlMzAtNjJhMTFlZGIwNzgy',
        'Content-Type': 'application/json'
      },
      data: {
        app_id: 'cce1c082-0357-4fae-bc4e-c17dd39165a4',
        include_aliases: { onesignal_id: [`${this.userID}`] },
        contents: { en: `${content}` },
        isAnyWeb: true,
        // Targeting specific mobile platforms
        //  isIos: true,
        //  isAndroid: true,
        
        target_channel: 'push'
      }
    })
      .then((response: any) => console.log('Sent:', response.data))
      .catch((err: any) => console.log('error', err));
  }

  // create user
  // inject user_id
  async createUser(email: string) {

    await axios.request({
      url: 'https://api.onesignal.com/apps/cce1c082-0357-4fae-bc4e-c17dd39165a4/users',
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      data: {
        identity: { external_id: `${this.userID}` },
        properties: {
          // ip: `${req.socket.remoteAddress}`,
          // purchases:[{}] // for IAP
        },
        enable: true,
        subscriptions: [
          { type: 'Email', token: `${email}`, enabled: true },
          { type: 'ChromePush', token: 'ChromePush', enabled: true}]
      }
    })
      .then((response: any) => console.log('Created', response.data))
      .catch((err: Error) => console.log('error', err))
  }


  // email push

  sendNotification(data: any) {
    let headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Basic OTc2M2JmNjctZWVkMy00OGJjLWFlMzAtNjJhMTFlZGIwNzgy"
    };

    let options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers
    };

    let req = https.request(options, (res: any) => {
      res.on('data', function (data: any) {
        console.log("Response:");
        console.log(JSON.parse(data));
      });
    });

    req.on('error', function (e: any) {
      console.log("ERROR:");
      console.log(e);
    });

    req.write(JSON.stringify(data));
    req.end();
  };

  emailBody = {
    app_id: "",
    "include_player_ids": ["harry_p30@yahoo.com"],
    "email_subject": "Welcome to Cat Facts!",
    "email_body": "<html><head>Welcome to Cat Facts</head><body><h1>Welcome to Cat Facts<h1><h4>Learn more about everyone's favorite furry companions!</h4><hr/><p>Hi Nick,</p><p>Thanks for subscribing to Cat Facts! We can't wait to surprise you with funny details about your favorite animal.</p><h5>Today's Cat Fact (March 27)</h5><p>In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat.</p><a href='https://catfac.ts/welcome'>Show me more Cat Facts</a><hr/><p><small>(c) 2018 Cat Facts, inc</small></p><p><small><a href='[unsubscribe_url]'>Unsubscribe</a></small></p></body></html>"
  };
}


export default Notification;