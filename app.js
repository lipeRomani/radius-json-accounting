const program = require('commander');
const { procIntegerParams } = require('./processors');

program
  .version('1.0.0')
  .option('-u, --username <string>', "The username")
  .option('-s, --acctStatusType <string>', "The status type")
  .option('-sid, --acctSessionId <string>', "The acct session id")
  .option('-id, --acctUniqueId <string>', "The acct unique id")
  .option('-nip, --nasIpAddress <string>', "The nas ip address")
  .option('-down, --acctInputOctects [integer]', "The download limit", procIntegerParams, 0)
  .option('-up, --acctOutputOctects [integer]', "The upload limit", procIntegerParams, 0)
  .option('-c, --calledStationId <string>', "The access point mac address")
  .option('-l, --callingStationId <string>', "The user device mac address")
  .option('-fip, --framedIpAddress <string>', "Framed id address")
  .option('-dt, --acctDelayTime [integer]', "The delay time to send acct", procIntegerParams, 0)
  .option('-st, --acctSessionTime [integer]', "The session time", procIntegerParams, 0)
  .parse(process.argv);

  const {
    username,
    calledStationId
  } = program;

  console.log(username, calledStationId)