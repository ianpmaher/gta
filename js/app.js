// user opens webpage, gets greeting/intro text as below

function introSequence() {
  let introButton1Elem = document.querySelector("#intro-button1");
  let introContainerElem = document.querySelector(".intro-container");

  // when user clicks button on page, proceed to show rest of intro sequence/game
  introButton1Elem.addEventListener("click", () => {
    // adding each element in dynamically through DOM
    let newTextElem1 = document.createElement("p");
    // allows style to match and have animation
    newTextElem1.classList.add("intro-text");
    newTextElem1.innerText =
      "We need someone to run some jobs for us. If you want to make a name for yourself, you gotta start now.";
    introContainerElem.appendChild(newTextElem1);
    // also getting rid of first button
    introButton1Elem.remove();
    // next string of text to be added in
    let newTextElem2 = document.createElement("p");
    newTextElem2.classList.add("intro-text");
    newTextElem2.innerText = "You interested in learning more?";

    // intro button, initially hidden
    let introButton2Elem = document.querySelector("#intro-button2");
    // shows the second button
    introButton2Elem.classList.remove("hidden");
    introButton2Elem.addEventListener("click", () => {
      // add in the second string of text
      introContainerElem.appendChild(newTextElem2);
      // getting rid of second button element
      introButton2Elem.remove();
      let introButton3Elem = document.querySelector("#intro-button3");
      introButton3Elem.classList.remove("hidden");
      introButton3Elem.addEventListener("click", () => {
        introContainerElem.classList.add("hidden");
        // showing the full website
        let mainElem = document.querySelector("main").classList.remove("hidden");
        let asideElem = document.querySelector("aside").classList.remove("hidden");
        // also removing last button
        introButton3Elem.remove();
      });
    });
  });
}
introSequence();

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
        // quoteElem.textContent = quotesData1;
        let promptObj = { prompt: quotesData1 };
        promptsUsedArray.push(promptObj);
      },
      (err) => console.log(err)
    );
};

// fetchRandomPrompt();

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
    pic: "/assets/oldsmobile.jpg",
  },
  {
    year: 2001,
    make: "Ford",
    model: "Fiesta",
    price: 400,
    saying: "That paint job doesn't mask the cigarette smell.",
    pic: "/assets/fordFiesta.jpg.jpg",
  },
  {
    year: 2004,
    make: "Dodge",
    model: "Caravan",
    price: 600,
    saying: "You can fit so many friends in there, and safely, too!",
    pic: "/assets/dodgeCaravan.jpg.jpg",
  },
  {
    year: 2008,
    make: "Chrysler",
    model: "PT Cruiser",
    price: 750,
    saying: "Why were these things so popular, anyways?",
    pic: "/assets/ChryslerPTCruiser.jpg",
  },
  {
    year: 2011,
    make: "RAM",
    model: "2500 Regular Cab",
    price: 900,
    saying: "Maybe I oughta get myself a truck.",
    pic: "/assets/ramTruck.jpg",
  },
  {
    year: 2015,
    make: "Subaru",
    model: "Outback",
    price: 1900,
    saying: "WOW. Your first car less than a decade old!",
    pic: "/assets/subaruOutback.jpg",
  },

  {
    year: 2006,
    make: "Jeep",
    model: "Commander",
    price: 2600,
    saying: "That thing has SO MUCH cargo space.",
    pic: "/assets/jeepCommander.jpg",
  },
  {
    year: 2015,
    make: "Ford",
    model: "Focus",
    price: 3500,
    saying: "How does that thing make it over curbs?",
    pic: "/assets/fordFocus.jpg",
  },
  {
    year: 2017,
    make: "Mitsubishi",
    model: "Mirage",
    price: 4300,
    saying: "Well isn't that a car, huh?",
    pic: "/assets/mitsubishiMirage.JPG",
  },
  {
    year: 2019,
    make: "Volkswagen",
    model: "Beetle",
    price: 5000,
    saying: "I can't believe you fit in that thing.",
    pic: "/assets/vWNewBeetle.jpg",
  },
  {
    year: 2016,
    make: "Toyota",
    model: "RAV-4",
    price: 6100,
    saying: "Looking slick, jack!",
    pic: "/assets/toyotaRav4.jpg.jpg",
  },
  {
    year: 2018,
    make: "Hyundai",
    model: "Sonata",
    price: 6900,
    saying: "Nice. I guess used car prices really HAVE inflated since Covid.",
    pic: "/assets/hyundaiSonata.jpg",
  },
  {
    year: 2015,
    make: "Lincoln",
    model: "MKZ Hybrid",
    price: 10000,
    saying: "Hybrid? You're not charging that thing off MY electric bill.",
    pic: "/assets/lincolnMKZHybrid.jpg",
  },
  {
    year: 2018,
    make: "Chevrolet",
    model: "Bolt LS",
    price: 14000,
    saying: "WHAT DID I JUST SAY ABOUT ELECTRIC CARS?",
    pic: "/assets/chevyBolt.jpg",
  },
  {
    year: 2019,
    make: "Honda",
    model: "Insight",
    price: 19000,
    saying: "So you got a knock-off Prius?",
    pic: "/assets/hondaInsight.jpg",
  },
  {
    year: 2023,
    make: "Kia",
    model: "Soul",
    price: 21000,
    saying: "Isn't Kia Soul that car from the hamster commercial?",
    pic: "/assets/kiaSoul.jpg",
  },
  {
    year: 2021,
    make: "Land Rover",
    model: "Discovery Sport",
    price: 30000,
    saying: "Now THAT is a vehicle worth my time.",
    pic: "/assets/landRoverDiscovery.jpg",
  },
  {
    year: 2021,
    make: "Mercedes",
    model: "A200 AMG",
    price: 36000,
    saying: "I would seriously count your blessings now, kid. The owner will want this one back.",
    pic: "/assets/mercedesAclass.jpg",
  },
  {
    year: 2020,
    make: "BMW",
    model: "m340i xDrive",
    price: 43000,
    saying: "Hold your horses, now, son. You don't want to get caught now.",
    pic: "/assets/bMWm340i.jpg",
  },
  {
    year: 2022,
    make: "Tesla",
    model: "Model Y",
    price: 55000,
    saying: "Okay, you realize how much Teslas stand out, right?",
    pic: "/assets/teslaModelY.jpg",
  },
  {
    year: 1963,
    make: "Jaguar",
    model: "E-Type Series 1 Coupe",
    price: 83000,
    saying: "Classic Jags really do age like fine wine.",
    pic: "/assets/mercedesAclass.jpg",
  },
  {
    year: 2021,
    make: "Porsche",
    model: "911",
    price: 150000,
    saying: "I'm nervous you even drove around in that thing.",
    pic: "/assets/porsche911.jpg",
  },
];

const userPlayer = new Player("Bob", "", "", vehicles[0]);
// userPlayer.getVehicle();

// ACTUAL CODE FOR TYPING TEST
// 60 seconds for user to type
const timeLimit = 60;

// fetch quote as above in order to get prompt

// defining variables for each DOM element
let timeElapsedElem = document.querySelector("#time-elapsed");
let accuracyCurrentElem = document.querySelector("#accuracy");
let userSpeedCurrentElem = document.querySelector("#user-speed");
let currentErrorElem = document.querySelector("#current-errors");
// from above Fetch() :
// let promptElem = document.querySelector("#prompt");
// let promptAuthorElem = document.querySelector("#prompt-author");
let textInputArea = document.querySelector(".text-input");
let restartButtonElem = document.querySelector(".restart-button");

// defining "career" area variables
// going to change src of this element
let userVehiclePicElem = document.querySelector("#user-vehicle");
// will define health as 100 and subtract from it errors
let userHealthElem = document.querySelector("#user-health");
let totalHeistsCountElem = document.querySelector("#total-heists");
let avgAccuracyElem = document.querySelector("#avg-accuracy");
let avgSpeedElem = document.querySelector("#avg-speed");

// CAREER variable initializations first
// totalHeists will be same thing as number of quotes beaten
let totalHeists = 0;
// user starts at 100 health, will subtract some # based on # errors
let userHealth = 100;
// will add cumulatively
let totalErrors = 0;

// needed basic variables for the logic --> "current"
// initialize timeElapsed
let timeElapsed = 0;
// defined above
let timeRemaining = timeLimit;
// user's current errors, accuracy, keystrokes typed all start at 0
let currentErrors = 0;
let accuracy = 0;
// typedCharsInput starts at 0, will use to count user input
let typedCharsInput = 0;
// will initialize timer on below function, likely an anonymous function
let timerInterval = "";

// LOGIC OF PROMPT INPUT STUFF
// prompt generated from API works because
// console.log(typeof(promptElem).textContent) = STRING
let currentPrompt = "";
// will track the number of prompts that user has loaded here
let numberQuotes = 0;
// ^^ as stated above,
// totalHeists will be same thing as number of quotes beaten
// let totalHeists = 0;

// API calls
let quoteElem = document.querySelector("#quote");
// attempt to see if can track prompts used in this way:
let promptsUsedArray = [];

// fetch prompt
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
        // LEAVING IN OLD STUFF, BUT CURRENT THEORY IS JUST PUSHING JSON DATA INTO KEY:VALUE PAIRS OF OBJECT
        // MAYBE THIS WILL STOP ISSUE WHERE SPLIT QUOTE DOESN'T DISPLAY
        let promptObj = { prompt: quotesData1.content, author: quotesData1.author };
        // quoteElem.textContent = quotesData1.content;
        // push just the content of the prompt into array, will use to check length of this array
        promptsUsedArray.push(promptObj);
        // quote's author populates different element
        // promptAuthorElem.textContent = quotesData1.author;
      },
      (err) => console.log(err)
    );
};

// setting up one function for quotable API and another for random API
const updatePromptQuote = () => {
  for (let i = 0; i < promptsUsedArray.length; i++) {
    // accessing the value of the prompt key in the object that was pushed when doing earlier fetch
    let currentPromp = promptsUsedArray[i].prompt;
    // need to separate each character of the quote
    // each will be an individual element
    let splitPrompt = currentPromp.split("");
    let arrSplitPrompt = splitPrompt.map((value) => {
      // putting the characters into a HTML span tag element
      // I chose span because lack of inline-level styling and lack of inherent styling
      // I had issues with createElement before this attempt
      return `<span class="prompt-text">${value}</span>`;
    });
    // my new STRETCH GOAL is new find a way to to .textContent instead of innerHTMl since innerHTMl is less secure
    quoteElem.innerHTML += arrSplitPrompt.join("");
    // textContent rather than innerText
    // StackOverflow suggested innerText is more performance heavy
    // https://stackoverflow.com/questions/35213147/difference-between-textcontent-vs-innertext
    // https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/
  }
};

// ***
// function to handle USER INPUT
// ***

const handleUserTypingInput = () => {
  // this line will reset the currentError (prompt) each time
  currentErrors = 0;
  let promptCharacters = document.querySelectorAll(".prompt-text");
  let arrPromptCharacters = Array.from(promptCharacters);
  // let textInputArea = document.querySelector(".text-input");
  currentUserInput = textInputArea.value;
  // going to split into array of individual characters
  currentUserInputArr = currentUserInput.split("");
  // count total characters that user inputs
  typedCharsInput++;
  // going to use the forEach iterative method for array to execute/call
  // callbackfunction on each element in that array of promptCharacters
  arrPromptCharacters.forEach((character, index) => {
    // in plain English, if the prompt character matches the character entered by the user (user input)
    if (character.textContent == currentUserInputArr[index]) {
      // add correct class to style
      character.classList.add("correct-character");
      // if user doesn't type anything
    } else if (currentUserInputArr[index] == null) {
      // DOM remove class from that character
      if (character.classList.contains("correct-character")) {
        character.classList.remove("correct-character");
      } else {
        character.classList.remove("incorrect-character");
      }
      // NOW if character enters the WRONG character
    } else {
      // necessary to check if this character already has styling, otherwise error count will be off
      // the syntax below !character.classList.contains ==> if the class list DOES NOT contain
      if (!character.classList.contains("incorrect-character")) {
        // add error
        currentErrors += 1;
        character.classList.add("incorrect-character");
      }
      currentErrorElem.textContent = currentErrors;
    }
    // now writing function to return TRUE if characters are all entered correctly
    // so user doesn't have to wait for timer to complete unnecessarily
    // using the function .every() with callback function
    let checkAllCorrect = arrPromptCharacters.every((element) => {
      return element.classList.contains("correct-character");
    });
    // code to end test if that checkAllCorrect evaluates to true
    if (checkAllCorrect) {
      showResultSession();
    }
  });
};

// now working on time variables
// timerEndSession function allows timer to end session if time runs out
const timerEndSession = () => {
  // let timeElapsedElem = document.querySelector("#time-elapsed");
  // let timeElapsed = 0;
  // let timeRemaining = timeLimit;
  if (timeRemaining === 0) {
    // ends test by running following function
    showResultSession();
  } else {
    timeRemaining--;
    timeElapsedElem.textContent = timeRemaining + "sec";
  }
};

// timer function with INTERVAL syntax like my Pomodoro one
const timerTickTockFunction = () => {
  // even though global variable defines timeLimit = 60, I am putting this here to reset timer
  timeLimit = 60;
  // let timerVariable = "";
  timerInterval = setInterval(timerEndSession, 1000);
};

// results of session, DOM manipulation of necessary stats
// also this function serves to end the typing session
const showResultSession = () => {
  // maybe have result section be hidden at first, then remove class hidden?
  // stop timer from running
  clearInterval(timerInterval);
  // stops user from restarting test by accident
  textInputArea.disabled = true;
};

// instead of button, going to have it be when user starts typing in text
// area, OR when user clicks into text input area
// let textInputArea = document.querySelector(".text-input");
// from MDN, this works with <textarea> element (as well as <input> and <select>)
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event

textInputArea.addEventListener("input", () => {
  // fetchPrompt();
  // updatePromptQuote();
  handleUserTypingInput();
});

// let promptElem = document.querySelector("#prompt");
// let promptAuthorElem = document.querySelector("#prompt-author");
// let promptsUsedArray = [];
// promptElem.textContent = promptsUsedArray[0].prompt
// promptAuthorElem.textContent = promptsUsedArray[0].author
