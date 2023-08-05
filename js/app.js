// what to initialize first?
// API calls
let promptElem = document.querySelector("#prompt");
let promptAuthorElem = document.querySelector("#prompt-author");
const fetchPrompt = () => {
  const url =
    // random 3 quotes fetched with between 150 and 200 characters
    "https://api.quotable.io/quotes/random?limit=3&minLength=150&maxLength=200";

  fetch(url, {
    headers: {},
  })
    .then((response) => {
      return response.json();
    })
    .then(
      (data) => {
        // api returns an array of JSON objects with query parameters set as above, so selecting first one
        quotesData1 = data[0];
        // quote itself is content of one element
        promptElem.textContent = quotesData1.content;
        // quote's author populates different element
        promptAuthorElem.textContent = quotesData1.author;
      },
      (err) => console.log(err)
    );
};
// by default, will fetch quote
// fetchPrompt();

// random paragraph API
// http://metaphorpsum.com/
const fetchRandomPrompt = () => {
  const url =
    // 1 randomly generated paragraph, containing 6 sentences!
    "http://metaphorpsum.com/paragraphs/1/6";

  fetch(url, {
    headers: {},
  })
    .then((response) => {
      // since API returns just the text, no object, I needed to do
      // response.text()
      return response.text();
    })
    .then(
      (data) => {
        // api returns just the text, not as JSON
        quotesData1 = JSON.stringify(data);
        // quote itself is content of one element
        promptElem.textContent = quotesData1;
      },
      (err) => console.log(err)
    );
};

fetchRandomPrompt();

// making a CLASS for user, so can make one for police later if two player
class Player {
  // constructor function
  constructor(name, criminal, police, vehicle) {
    this.name = name;
    this.criminal = true;
    this.police = false;
    this.vehicle = vehicle;
  }
  // methods
  getVehicle() {
    console.log(`My vehicle is a ${this.vehicle.year} ${this.vehicle.make} ${this.vehicle.model}.`);
  }
  getSpeed() {
    // stuff
  }
  getAccuracy() {
    // stuff
  }
}

vehicles = [
  {
    year: 1996,
    make: "Oldsmobile",
    model: "Eighty Eight",
    price: 200,
    saying: "Hey, it's a car right?",
    pic: "/assets/oldsmobile.jpg"
  },
  {
    year: 2001,
    make: "Ford",
    model: "Fiesta",
    price: 400,
    saying: "That paint job doesn't mask the cigarette smell.",
    pic: "/assets/fordFiesta.jpg.jpg"
  },
  {
    year: 2004,
    make: "Dodge",
    model: "Caravan",
    price: 600,
    saying: "You can fit so many friends in there, and safely, too!",
    pic: "/assets/dodgeCaravan.jpg.jpg"
  },
  {
    year: 2008,
    make: "Chrysler",
    model: "PT Cruiser",
    price: 750,
    saying: "Why were these things so popular, anyways?",
    pic: "/assets/ChryslerPTCruiser.jpg"
  },
  {
    year: 2011,
    make: "RAM",
    model: "2500 Regular Cab",
    price: 900,
    saying: "Maybe I oughta get myself a truck.",
    pic: "/assets/ramTruck.jpg"
  },
  {
    year: 2015,
    make: "Subaru",
    model: "Outback",
    price: 1900,
    saying: "WOW. Your first car less than a decade old!",
    pic: "/assets/subaruOutback.jpg"
  },
  
  {
    year: 2006,
    make: "Jeep",
    model: "Commander",
    price: 2600,
    saying: "That thing has SO MUCH cargo space.",
    pic: "/assets/jeepCommander.jpg"
  },
  {
    year: 2015,
    make: "Ford",
    model: "Focus",
    price: 3500,
    saying: "How does that thing make it over curbs?",
    pic: "/assets/fordFocus.jpg"
  },
  {
    year: 2017,
    make: "Mitsubishi",
    model: "Mirage",
    price: 4300,
    saying: "Well isn't that a car, huh?",
    pic: "/assets/mitsubishiMirage.JPG"
  },
  {
    year: 2019,
    make: "Volkswagen",
    model: "Beetle",
    price: 5000,
    saying: "I can't believe you fit in that thing.",
    pic: "/assets/vWNewBeetle.jpg"
  },
  {
    year: 2016,
    make: "Toyota",
    model: "RAV-4",
    price: 6100,
    saying: "Looking slick, jack!",
    pic: "/assets/toyotaRav4.jpg.jpg"
  },
  {
    year: 2018,
    make: "Hyundai",
    model: "Sonata",
    price: 6900,
    saying: "Nice. I guess used car prices really HAVE inflated since Covid.",
    pic: "/assets/hyundaiSonata.jpg"
  },
  {
    year: 2015,
    make: "Lincoln",
    model: "MKZ Hybrid",
    price: 10000,
    saying: "Hybrid? You're not charging that thing off MY electric bill.",
    pic: "/assets/lincolnMKZHybrid.jpg"
  },
  {
    year: 2018,
    make: "Chevrolet",
    model: "Bolt LS",
    price: 14000,
    saying: "WHAT DID I JUST SAY ABOUT ELECTRIC CARS?",
    pic: "/assets/chevyBolt.jpg"
  },
  {
    year: 2019,
    make: "Honda",
    model: "Insight",
    price: 19000,
    saying: "So you got a knock-off Prius?",
    pic: "/assets/hondaInsight.jpg"
  },
  {
    year: 2023,
    make: "Kia",
    model: "Soul",
    price: 21000,
    saying: "Isn't Kia Soul that car from the hamster commercial?",
    pic: "/assets/kiaSoul.jpg"
  },
  {
    year: 2021,
    make: "Land Rover",
    model: "Discovery Sport",
    price: 30000,
    saying: "Now THAT is a vehicle worth my time.",
    pic: "/assets/landRoverDiscovery.jpg"
  },
  {
    year: 2021,
    make: "Mercedes",
    model: "A200 AMG",
    price: 36000,
    saying: "I would seriously count your blessings now, kid. The owner will want this one back.",
    pic: "/assets/mercedesAclass.jpg"
  },
  {
    year: 2020,
    make: "BMW",
    model: "m340i xDrive",
    price: 43000,
    saying: "Hold your horses, now, son. You don't want to get caught now.",
    pic: "/assets/bMWm340i.jpg"
  },
  {
    year: 2022,
    make: "Tesla",
    model: "Model Y",
    price: 55000,
    saying: "Okay, you realize how much Teslas stand out, right?",
    pic: "/assets/teslaModelY.jpg"
  },
  {
    year: 1963,
    make: "Jaguar",
    model: "E-Type Series 1 Coupe",
    price: 83000,
    saying: "Classic Jags really do age like fine wine.",
    pic: "/assets/mercedesAclass.jpg"
  },
  {
    year: 2021,
    make: "Porsche",
    model: "911",
    price: 150000,
    saying: "I'm nervous you even drove around in that thing.",
    pic: "/assets/porsche911.jpg"
  },
]

const userPlayer = new Player("Bob", "", "", vehicles[0]);
userPlayer.getVehicle();
