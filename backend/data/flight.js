/*
  Initially flight will be always cleared for landing or not need to be discussed.
   
*/
export const Flightlog = [
  /* we will check all the serivce member */
  {
    // flight-log-generate-at-9pm-the-delay-was-because-of-luggage-issue
    luggagehandler: {
      isdelayed: true,
      reason: "Luggage Missing",
      expectedstarttime: new Date('Sun May 16 2021 00:19:32'),
      expectedendtime: new Date('Sun May 16 2021 00:19:32'),
    },
    cabinhandler: {
      isdelayed: false,
      reason: "",
      expectedstarttime: new Date('Sun May 16 2021 00:19:32'),
      expectedendtime: new Date('Sun May 16 2021 00:19:32'),
    },
    rampuphandler: {
      isdelayed: false,
      reason: "",
      expectedstarttime: new Date('Sun May 16 2021 00:19:32'),
      expectedendtime: new Date('Sun May 16 2021 00:19:32'),
    },
  },
  {
    // flight-log-generate-at-9:15pm-the-delay-was-fixed
    luggagehandler: {
      isdelayed: false,
      reason: "Luggage Found",
      expectedstarttime: new Date('Sun May 16 2021 00:19:32'),
      expectedendtime: new Date('Sun May 16 2021 00:19:32'),
    },
    cabinhandler: {
      isdelayed: false,
      reason: "",
      expectedstarttime: new Date('Sun May 16 2021 00:19:32'),
      expectedendtime: new Date('Sun May 16 2021 00:19:32'),
    },
    rampuphandler: {
      isdelayed: false,
      reason: "",
      expectedstarttime: new Date('Sun May 16 2021 00:19:32'),
      expectedendtime: new Date('Sun May 16 2021 00:19:32'),
    },
  }];
export const flight_data = [
  {
    flightno: "101",
    flightname: "flight_no_1",
    flighttype: "inbound",
    delayTime: "",
    from:"Mumbai",
    to:"delhi",
    isterminal: true,
    landingtime: new Date('Sun May 15 2021 00:19:32'),
    takeofftime: new Date('Sun May 15 2021 00:00:32'),
    // 🌟 Here timeStamp was create & updated thus,
    // the latest timeStamp will be 9:15pm
  },
  {
    flightno: "102",
    flightname: "flight_no_2",
    from:"Mumbai",
    to:"delhi",
    flighttype: "inbound",
    delayTime: "",
    isterminal: true,
    landingtime: new Date('Sun May 16 2021 00:19:32'),
    takeofftime: new Date('Sun May 16 2021 00:00:32'),
  },
];
