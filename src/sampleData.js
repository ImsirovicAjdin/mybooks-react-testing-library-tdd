// const today = new Date();
// const at = (hours) => today.setHours(hours, 0);
// export const sampleAppointments = [
//   { startsAt: at(9), customer: { firstName: "Charlie" } },
//   { startsAt: at(10), customer: { firstName: "Frankie" } },
//   { startsAt: at(11), customer: { firstName: "Casey" } },
//   { startsAt: at(12), customer: { firstName: "Ashley" } },
//   { startsAt: at(13), customer: { firstName: "Jordan" } },
//   { startsAt: at(14), customer: { firstName: "Jay" } },
//   { startsAt: at(15), customer: { firstName: "Alex" } },
//   { startsAt: at(16), customer: { firstName: "Jules" } },
//   { startsAt: at(17), customer: { firstName: "Stevie" } },
// ];
import { faker } from "@faker-js/faker";

const unique = (array) => array.filter((v, i, a) => a.indexOf(v) === i);
const pickRandom = (array) => array[Math.floor(Math.random() * array.length)];

const today = new Date();
const at = (hours) => today.setHours(hours, 0);

const stylists = unique(Array.from({ length: 7 }, () => faker.person.firstName()));
const services = ["Cut", "Blow-dry", "Cut & color", "Beard trim", "Cut & beard trim", "Extensions"];

const generateFakeCustomer = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phoneNumber: faker.phone.number(),
});

const generateFakeAppointment = () => ({
  customer: generateFakeCustomer(),
  stylist: pickRandom(stylists),
  service: pickRandom(services),
  notes: faker.lorem.paragraph(),
});

export const sampleAppointments = Array.from({ length: 9 }, (_, i) => ({
  startsAt: at(9 + i),
  ...generateFakeAppointment(),
}));
