import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    isAdmin: true,
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  // Creating users based on roles
  // the following is list of luggage handler
  //3
  {
    name: "Luggage_handler_1",
    email: "lgh1@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "luggageservice",
  },
  {
    name: "Luggage_handler_2",
    email: "lgh2@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "luggageservice",
  },
  {
    name: "Luggage_handler_3",
    email: "lgh3@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "luggageservice",
  },
  // the following is a list of atc service people
  //6
  {
    name: "atc_service_1",
    email: "atcService1@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "atcservice",
  },
  {
    name: "atc_service_2",
    email: "atcService2@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "atcservice",
  },
  {
    name: "atc_service_3",
    email: "atcService3@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "atcservice",
  },
  // the following is a list of cabin service people
  //9
  {
    name: "cabin_service_1",
    email: "cabinService1@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "cabinservice",
  },
  {
    name: "cabin_service_2",
    email: "cabinService2@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "cabinservice",
  },
  {
    name: "cabin_service_3",
    email: "cabinService3@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "cabinservice",
  },
  //12
  // the following is a list of ramp up service people
  {
    name: "ramp_up_1",
    email: "rampupService1@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "rampupservice",
  },
  {
    name: "ramp_up_2",
    email: "rampupService2@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "rampupservice",
  },
  {
    name: "ramp_up_3",
    email: "rampupService3@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "rampupservice",
  },
];

export default users;
