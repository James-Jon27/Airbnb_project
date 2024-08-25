"use strict";
const { Review } = require("../models");
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

const reviews = [
  {
    spotId: 1,
    userId: 2,
    stars: 5,
    review: "meh",
  },
  {
    spotId: 2,
    userId: 1,
    stars: 1,
    review: "IT WAS TOTALLY AWESOMEEEE!!!",
  },
  {
    spotId: 3,
    userId: 1,
    stars: 2,
    review: "..................",
  },
  {
    spotId: 4,
    userId: 2,
    stars: 3,
    review: "AWOOOOGA",
  },
  {
    spotId: 1,
    userId: 1,
    stars: 4,
    review: "meh",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await Review.bulkCreate(reviews, { validate: true });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = "Reviews";
    await queryInterface.bulkDelete(options, reviews, {});
  },
};
