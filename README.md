# RingCentral call park demo


## Setup

Rename '.env.sample' to '.env' and edit it to specify credentials.

For `partyId` and `sessionId`, please check the "Run" section below for instructions to find them.


```
yarn install
```


## Run

First of all, run your web phone app to make an outbound call.
Check the WebSocket messages, and find the `partyId` and `sessionId` of the call.
You may find it in SIP message headers, example:

```
p-rc-api-ids: party-id=p-a0d17ee2d68abz18cf557d5dez11dfee30000-1;session-id=s-a0d17ee2d68abz18cf557d5dez11dfee30000
```

Configure `.env` file with the `partyId` and `sessionId` you found.

Then run the demo:

```
yarn test
```
