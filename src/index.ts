import RingCentral from '@rc-ex/core';
import DebugExtension from '@rc-ex/debug';

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
});

const main = async () => {
  await rc.authorize({ jwt: process.env.RINGCENTRAL_JWT_TOKEN! });
  const debugExtension = new DebugExtension();
  await rc.installExtension(debugExtension);

  await rc
    .restapi()
    .account('~')
    .telephony()
    .sessions(process.env.sessionId)
    .parties(process.env.partyId)
    .park()
    .post({ data: {} });

  await rc.revoke();
};
main();
