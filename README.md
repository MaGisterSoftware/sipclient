# SipClient
=========

SipClient is an open-source nodejs SIP library, compliant with the IETF RFC3261 specification.

## Description

    SipClient is a sip client compatible with the
    following specifications:
    - RFC 3261 (SIP),
    - RFC 2617 (Digest Authentication)
    You should easilly retrieve those specifications on internet with
    your favorite search engine.

## Installation

  `npm install @salvob/sipclient`

## Usage

    let sipClient = require('@salvob/sipclient').SipClient;

    let connection = {
        serverHost: 'sip.prov.com', // SIP server address
        serverPort: 5060,           // SIP server port
        username: 'sipusername',    // SIP username
        password: 'sippassword',    // SIP password
        ipNat: '192.168.10.61',     // Local Ip Address
        sessionTime: 2 * 60         // Refresh session every 2 minutes
    }

    let client = sipClient(connection);

    //On incoming call
    client.on('INVITE', (fromNumber, ringing, busy, message) => {
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
    });

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
