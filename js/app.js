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
fetchPrompt();



// making a CLASS for user, so can make one for police later if two player
class Player {
  // constructor function
  constructor(name, criminal, police, vehicle) {
    this.name = name;
    this.criminal = true;
    this.police = false;
    this.vehicle = vehicle
  }
  // methods
  getVehicle() {
    console.log(`My vehicle is ${this.vehicle}.`)
  }
  getSpeed() {
    // stuff
  }
  getAccuracy() {
    // stuff
  }
}

const userPlayer = new Player("Bob","","",vehicles[0])
userPlayer.getVehicle()