// controllers/seedController.js
const bcrypt = require("bcrypt");
const Club = require("../models/Club");
// const { spider, delta, ecell, max, sigma, oedc, dc, naksh, psi, rmi, graphique, td, prof, fh, db, ever,scient } =require ("../assets")
const { spider, delta, ecell, max, sigma, oedc, dc, naksh, psi, rmi, graphique, td, prof, fh, db, ever, scient } = require('../assets');

exports.seedClubs = async (req, res) => {
  try {
    // Sample clubs data to seed
    const clubsData = [
      {
        name: "SPIDER",
        credits: 7,
        password: await bcrypt.hash("spider1964", 10),
        logo : spider,
      },
      {
        name: "DELTA",
        credits: 7,
        password: await bcrypt.hash("delta1964", 10),
        logo :delta,
      },
      {
        name: "E-CELL",
        credits: 7,
        password: await bcrypt.hash("ecell1964", 10),
        logo :ecell,
      },
      {
        name: "MAXIMUS",
        credits: 7,
        password: await bcrypt.hash("maximus1964", 10),
        logo :max,
      },
      {
        name: "SIGMA",
        credits: 7,
        password: await bcrypt.hash("sigma1964", 10),
        logo :sigma,
      },
      {
        name: "180-DC",
        credits: 7,
        password: await bcrypt.hash("180dc1964", 10),
        logo :oedc,
      },
      {
        name: "DESIGNERS-CONSORTIUM",
        credits: 7,
        password: await bcrypt.hash("designersconsortium1964", 10),
        logo :dc,
      },
      {
        name: "NAKSHATRA",
        credits: 7,
        password: await bcrypt.hash("nakshatra1964", 10),
        logo :naksh,
      },
      {
        name: "PSI",
        credits: 7,
        password: await bcrypt.hash("psi1964", 10),
        logo :psi,
      },
      {
        name: "RMI",
        credits: 7,
        password: await bcrypt.hash("rmi1964", 10),
        logo :rmi,
      },
      {
        name: "GRAPHIQUE",
        credits: 7,
        password: await bcrypt.hash("graphique1964", 10),
        logo :graphique,
      },
      {
        name: "3D-AERODYNAMICS",
        credits: 7,
        password: await bcrypt.hash("3daerodynamics1964", 10),
        logo :td,
      },
      {
        name: "PROFNITT",
        credits: 7,
        password: await bcrypt.hash("profnitt1964", 10),
        logo :prof,
      },
      {
        name: "FORCE-HYPERLOOP",
        credits: 7,
        password: await bcrypt.hash("forcehyperloop1964", 10),
        logo :fh,
      },
      {
        name: "DATA-BYTE",
        credits: 7,
        password: await bcrypt.hash("databyte1964", 10),
        logo :db,
      },
      {
        name: "EVER",
        credits: 7,
        password: await bcrypt.hash("ever1964", 10),
        logo :ever,
      },
      {
        name: "SCIENT",
        credits: 100,
        password: await bcrypt.hash("scient1964", 10),
        logo :scient,
        isAdmin:true
      },
    ];

    // Delete existing clubs (optional)
    await Club.deleteMany({}); // Remove all clubs for a clean slate

    // Insert the clubs into the database
    await Club.insertMany(clubsData);

    res.status(201).send({ message: "Clubs seeded successfully!" });
  } catch (error) {
    console.error("Seeding error:", error);
    res.status(500).send({ message: "Error seeding clubs" });
  }
};