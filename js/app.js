// user opens webpage, gets greeting/intro text as below

// defining up here for the sake of debugging and control flow
let textInputArea = document.querySelector(".text-input");

function introSequence() {
  let introButton1Elem = document.querySelector("#intro-button1");
  let introButton2Elem = document.querySelector("#intro-button2");
  let introButton3Elem = document.querySelector("#intro-button3");
  let introButton4Elem = document.querySelector("#intro-button4");
  let introButton5Elem = document.querySelector("#intro-button5");
  let noIntroButton = document.querySelector("#no-intro-button");
  let introContainerElem = document.querySelector(".intro-container");

  // when user clicks button on page, proceed to show rest of intro sequence/game
  introButton1Elem.addEventListener("click", () => {
    // hides the site's main contents!
    let mainElem = document.querySelector("main").classList.add("hidden");
    textInputArea.disabled = true;
    // remove the no intro button
    noIntroButton.remove();
    // adding each element in dynamically through DOM
    let newTextElem1 = document.createElement("p");
    // allows style to match and have animation
    newTextElem1.classList.add("intro-text");
    newTextElem1.textContent =
      "We need someone to run some jobs for us. If you want to make a name for yourself, you gotta start now.";
    introContainerElem.appendChild(newTextElem1);
    // also getting rid of first button
    introButton1Elem.remove();
    // next string of text to be added in
    let newTextElem2 = document.createElement("p");
    newTextElem2.classList.add("intro-text");
    newTextElem2.textContent = "You interested in learning more?";
    // intro button, initially hidden
    // shows the second button
    introButton2Elem.classList.remove("hidden");
    introButton2Elem.addEventListener("click", () => {
      // add in the second string of text
      introContainerElem.appendChild(newTextElem2);
      // getting rid of second button element
      introButton2Elem.remove();
      // showing third button element
      introButton3Elem.classList.remove("hidden");
      introButton3Elem.addEventListener("click", () => {
        // add in next string of text to instructions
        introButton3Elem.remove()
        let newTextElem3 = document.createElement("p")
        newTextElem3.classList.add("intro-text")
        newTextElem3.textContent = "You will have to steal some cars for us."
        introContainerElem.appendChild(newTextElem3)
        let newTextElem4 = document.createElement("p")
        newTextElem4.classList.add("intro-text")
        newTextElem4.textContent = "You gotta TYPE as FAST as you can to outrun those cops. A leisurely 30 words per minute ought to be enough for the first junker car."
        introContainerElem.appendChild(newTextElem4)
        introButton4Elem.classList.remove("hidden")
        introButton4Elem.addEventListener("click", () => {
          introButton4Elem.remove()
          let newTextElem5 = document.createElement("p")
          newTextElem5.classList.add("intro-text")
          newTextElem5.textContent = "Yes, typing. You'll see a prompt. Type in each letter. Gotta be quick, but MISTAKES will cost you." 
          introContainerElem.appendChild(newTextElem5)
          let newTextElem6 = document.createElement("p")
          newTextElem6.classList.add("intro-text")
          newTextElem6.textContent = "You'll lose 1 health for every 2 typos. Got it? Each prompt will get more difficult, too. But each prompt will mean more money."
          introContainerElem.appendChild(newTextElem6)
          introButton5Elem.classList.remove("hidden")
          introButton5Elem.addEventListener("click", () => {
            introButton5Elem.remove();    
            introContainerElem.classList.add("hidden");
            // showing the full website
            let mainElem = document.querySelector("main").classList.remove("hidden");
            // also removing last button
            textInputArea.disabled = false;
          })
        })  
      });
    });
  });
  // when user clicks on the no-intro-button, will stop intro and unhide good stuff
  noIntroButton.addEventListener("click", () => {
    textInputArea.disabled = false;
    introButton1Elem.remove();
    introButton2Elem.remove();
    introButton3Elem.remove();
    introContainerElem.classList.add("hidden");
    noIntroButton.remove();
  });
}
introSequence();

// making a CLASS for user, so can make one for police later if two player
class Player {
  // constructor function
  constructor(name, criminal, police, vehicle) {
    this.name = name;
    this.criminal = true;
    this.police = false;
    this.vehicle = vehicle;
    this.accuracyArray = []
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
    pic: "/assets/fordFiesta.jpg",
  },
  {
    year: 2004,
    make: "Dodge",
    model: "Caravan",
    price: 600,
    saying: "You can fit so many friends in there, and safely, too!",
    pic: "/assets/dodgeCaravan.jpg",
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
    pic: "/assets/toyotaRav4.jpg",
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




// ACTUAL CODE FOR TYPING TEST
// 60 seconds for user to type
const timeLimit = 60;

// fetch quote as above in order to get prompt

// defining variables for each DOM element
let timeRemainingElem = document.querySelector("#time-remaining");
let accuracyCurrentElem = document.querySelector("#accuracy");
let userSpeedCurrentElem = document.querySelector("#user-speed");
let currentErrorElem = document.querySelector("#current-errors");
// from below Fetch() :
// let promptElem = document.querySelector("#prompt");
// let promptAuthorElem = document.querySelector("#prompt-author");
// let textInputArea = document.querySelector(".text-input");

// defining "career" area variables
// going to change src of this element
let userVehiclePicElem = document.querySelector("#user-vehicle");
// trying to set it to display pic initially
// userVehiclePicElem.src = `"${userPlayer.vehicles.pic}"`

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
userHealthElem.textContent = `${userHealth} hit points`;
// will add cumulatively
let totalErrors = 0;
// needed basic variables for the logic --> "current"
// initialize timeElapsed as 0, this will be used as difference in calculations
let timeElapsed = 0;
// time remaining can change if timeLimit is changed elsewhere (currently a const variable though)
let timeRemaining = timeLimit;
// user's current errors, accuracy, keystrokes typed all start at 0
let currentErrors = 0;
let avgAccuracy = 0;
let accuracy = 0;
// initializing here?
let accuracySaved = 0
let avgSpeedVariable = 0;
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

// fetch prompt COMBINED with displaying the new prompt
// also will display the prompt as separated spans
const updatePromptQuote = () => {
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
        // let promptObj = { prompt: quotesData1.content, author: quotesData1.author };
        currentPrompt = quotesData1.content;
        let splitPrompt = currentPrompt.split("");
        let arrSplitPrompt = splitPrompt.map((value) => {
          // necessary to split each character into an individual HTML span
          // putting the characters into a HTML span tag element
          // I chose span because lack of inline-level styling and lack of inherent styling
          // I had issues with createElement before this attempt
          return `<span class="prompt-text">${value}</span>`;
        });
        // my new STRETCH GOAL is new find a way to to .textContent instead of innerHTMl since innerHTMl is less secure
        quoteElem.innerHTML += arrSplitPrompt.join("");
        // promptsUsedArray.push(promptObj);
        // quote's author populates different element
        // promptAuthorElem.textContent = quotesData1.author;
      },
      (err) => console.log(err)
    );
  // textContent rather than innerText
  // StackOverflow suggested innerText is more performance heavy
  // https://stackoverflow.com/questions/35213147/difference-between-textcontent-vs-innertext
  // https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/
};

// **RANDOM PROMPT QUOTE**
// there have been issues documented in the GitHub for the Quotable API
// with server being down, so temporarily going to do this and 
// figure out if I can do a failsafe later...
// https://github.com/lukePeavey/quotable/issues
// dated 8/7 https://github.com/lukePeavey/quotable/issues/193

// random paragraph API
// http://metaphorpsum.com/

const updateRandomPromptQuote = () => {
  const url =
    // 1 randomly generated paragraph, containing 6 sentences!
    "http://metaphorpsum.com/paragraphs/1/2";

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
        let splitPromptRandom = quotesData1.split("")
        let arrSplitPromptRandom = splitPromptRandom.map((value) => {
          // as stated in updatePromptQuote(), need to split each character 
          // into individual HTML span tag element
          return `<span class="prompt-text">${value}</span>`
        })
        // the API quote had quotation marks, so removing first and last element of the 
        // span array will remove those quotation marks (since they are now span elements)
        arrSplitPromptRandom.shift()
        arrSplitPromptRandom.pop()
        quoteElem.innerHTML += arrSplitPromptRandom.join("")
        // quote itself is content of one element
        // let promptObj = { prompt: quotesData1 };
        // promptsUsedArray.push(promptObj);
      },
      (err) => console.log(err)
    );
};
// fetchRandomPrompt();

// ***
// function to handle USER INPUT
// ***

const handleUserTypingInput = () => {
  // this line will reset the currentError (prompt) each time
  // currentErrors = 0;
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
    }
  });
  // current error element handling and current accuracy element handling
  currentErrorElem.textContent = currentErrors;
  // accuracy text
  let correctCharacterCount = typedCharsInput - (currentErrors);
  let accuracy = (correctCharacterCount / typedCharsInput)
  // 100 to make accuracy a percentage value
  let accuracyText = (accuracy) * 100;
  accuracyCurrentElem.textContent = Math.round(accuracyText) + "%";
  // maybe store accuracy as something else ??
  accuracySaved = accuracy
  userPlayer.accuracyArray.push(accuracySaved)
  
  // now writing function to return TRUE if characters are all entered correctly
  // so user doesn't have to wait for timer to complete unnecessarily
  // using the function .every() with callback function
  let checkAllCorrect = arrPromptCharacters.every((element) => {
    return element.classList.contains("correct-character");
  });
  // code to end test if that checkAllCorrect evaluates to true
  if (checkAllCorrect) {
    showResultSession();
  } else if (typedCharsInput.length === arrPromptCharacters.length) {
    showResultSession();
  }
};

// now working on time variables
// timerEndSession function allows timer to end session if time runs out
const timerUpdateSession = () => {
  // if is time left, following things will happen:
  if (timeRemaining > 0) {
    // decrement ---> timeRemaining = 60 - timeElapsed
    timeRemaining--;
    // increment timeElapsed
    timeElapsed++;
    // display the timeRemaining through DOM manipulation
    timeRemainingElem.textContent = timeRemaining + "sec";
  } else {
    // ends test by running following function
    showResultSession();
  }
};

// timer function with INTERVAL syntax like my Pomodoro one
const timerTickTockFunction = () => {
  // even though global variable defines timeLimit = 60, I am putting this here to reset timer
  timeRemaining = 60;
  timerInterval = setInterval(timerUpdateSession, 1000);
};

// results of session, DOM manipulation of necessary stats
// also this function serves to end the typing session
const showResultSession = () => {
  // maybe have result section be hidden at first, then remove class hidden?
  // stop timer from running
  clearInterval(timerInterval);
  // stops user from restarting test by accident
  textInputArea.disabled = true;
  // time variables for results after session is ended
  // textInputArea.value.length is the number of characters per minute typed
  let currentUserCharacters = textInputArea.value.length;
  // wpm **
  // words per minute is characters per minute divided by 5, so an average
  wpm = Math.round((currentUserCharacters / 5 / timeElapsed) * 60);
  userSpeedCurrentElem.textContent = wpm + "wpm";

  updateCareerStats();
};


// since CSS animations only play once (per MDN) if iteration-count set to "infinite," which would look silly here,
// necessary to add animation this way and then remove it afterwards, so it can be added again

const makeCarFlipAnimation = () => {
  userVehiclePicElem.style.cssText += `animation:rotate-and-scale 0.8s linear both`
}
const removeCarFlipAnimation = () => {
  userVehiclePicElem.style.cssText -= `animation:rotate-and-scale 0.8s linear both`
}

// update career stats, not sure if I should put inside the function showResultSession?
const updateCareerStats = () => {
  // update career heists
  totalHeists++;
  totalHeistsCountElem.textContent = totalHeists;
  totalErrors += currentErrors
  // vehicles update !
  userPlayer.vehicle = vehicles[totalHeists];
  // update picture of vehicle 
  // adding css animation style here!!! with function defined above. will iteratively remove later on
  makeCarFlipAnimation()
  updateVehicleStats()
  // first heist completed --->
  if (totalHeists === 1) {
    // update health
    userHealth = userHealth - Math.round(totalErrors /2)
    userHealthElem.textContent = userHealth;
    // update average speed per minute
    avgSpeedElem.textContent = `${wpm} wpm`
    // average accuracy career
    avgAccuracyElem.textContent = Math.round(accuracySaved * 100) + "%"
    updateVehicleStats()
  }
  else if (totalHeists > 1) {
    avgSpeedVariable = avgSpeedVariable + wpm;
    avgSpeedElem.textContent = avgSpeedVariable;  
    // health for each session is logged
    userHealth = userHealth - Math.round(currentErrors / 2);
    userHealthElem.textContent = userHealth;
    // average accuracy career
    for (let i=0; i<userPlayer.accuracyArray.length; i++) {
      avgAccuracy = Math.round(userPlayer.accuracyArray[0] + userPlayer.accuracyArray[i]) / totalHeists
      avgAccuracyElem.textContent = ((avgAccuracy/totalHeists) * 100) + "%";
    }
    updateVehicleStats()
  }
  else if (totalHeists === vehicles.length) {
    displayWinningScreen()
  }

};

const userVehicleNameElem = document.querySelector("#vehicle-name")
const userVehicleCostElem = document.querySelector("#vehicle-worth")

const updateVehicleStats = () => {
  userVehiclePicElem.src = userPlayer.vehicle.pic;
  userVehicleNameElem.textContent = `${userPlayer.vehicle.year} ${userPlayer.vehicle.make} ${userPlayer.vehicle.model}`
  userVehicleCostElem.textContent = `$ ${userPlayer.vehicle.price}`
};


// RESET THE GAME'S CURRENT VALUES
const resetCurrentValues = () => {
  clearInterval(timerInterval);
  timeRemaining = timeLimit;
  timeElapsed = 0;
  quoteElem.textContent = ""
  textInputArea.value = ""
  textInputArea.disabled = false;
  currentErrors = 0;
  currentErrorElem.textContent = 0;
  accuracy = 0;
  accuracySaved = 0;
  typedCharsInput = 0;
  accuracyCurrentElem.textContent = 100;
  timeRemainingElem.textContent = timeRemaining + "sec";
  userSpeedCurrentElem.textContent = "";
};

// reset button you can hit "tab" to get to, like 10FastFingers
let restartButtonElem = document.querySelector(".restart-button");
restartButtonElem.addEventListener("click", resetCurrentValues);

// instead of button, going to have it be when user starts typing in text
// area, OR when user clicks into text input area
// let textInputArea = document.querySelector(".text-input");
// from MDN, this works with <textarea> element (as well as <input> and <select>)
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event

updateVehicleStats();

// START THE GAME WRAPPER FUNCTION
const startSession = () => {
  resetCurrentValues();
  // commenting out normal Quotable API ******
  // updatePromptQuote();
  // putting in Random API function *****
  updateRandomPromptQuote()
  // clear Interval on timer functions
  removeCarFlipAnimation()
};

// going to have prompt timer start when user clicks into the text area
textInputArea.addEventListener("click", () => {
  startSession(), 
  timerTickTockFunction()
},
// { once:true } 
)

// going to have prompt timer start when user clicks into the text area
textInputArea.addEventListener("input", () => {
  handleUserTypingInput();
});


const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", startSession);