# SipClient
=========

SipClient is an open-source SIP library for nodejs, compliant with the IETF RFC3261 specification.

## Description

    Sip-Client is a sip client compatible with the
    following specifications:
    - RFC 3261 (SIP),
    - RFC 2617 (Digest Authentication)
    You should easilly retrieve those specifications on internet with
    your favorite search engine.

## Installation

  `npm install @salvob/sipclient`

## Usage

    let sipclient = require('@salvob/sipclient').SipClient;

    let clientData = {
        serverHost: 'sip.prov.com',
        serverPort: 5060,
        username: 'sipusername',
        password: 'sippassword',
        ipNat: '192.168.10.61', // Local Ip Address
        sessionTime: 2 * 60 // Refresh session every 2 minutes
    }

    let cb = {
        onIncomingCall: (fromNumber, ringing, busy, message) => {
            console.log(`Incoming: ${fromNumber}`);

            if(fromNumber === '012223334455'){
                ringing(() => { 
                    console.log('Ringing');
                    //Execute  script...
                    //...
                    //...
                    //End Script
                    //busy(() => { console.log('End'); })
                })
            }
            else{
                busy(() => { console.log('End'); })
            }
        }
    }

    let client = sipclient(clientData, cb);

    //Catch SIP Event
    client.on('CANCEL', (message) => {
        console.log('Closed');
    });

    client.start((error, message) => {
        if(error){
            console.log(error, message);
            process.exit(1);
        }else{
            console.log("Logged.");
        }
    });
  

## Tests

  `npm test`
