const mongoose = require("mongoose");
const Listing = require("../models/listing.js");

main()
  .then((res) => {
    console.log(`Connected to DB`);
  })
  .catch((ERROR) => {
    console.log(`ERROR  --- ${ERROR}`);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chat");
}

// Initilizing dumy data
initilizeDumyData()
  .then(() => {
    console.log("Data was Initlized!");
  })
  .catch((ERROR) => {
    console.log(`ERROR --- ${ERROR}`);
  });

async function initilizeDumyData(data) {
  const initilizeData = await Listing.insertMany(data);
  console.log(initilizeData);
}
