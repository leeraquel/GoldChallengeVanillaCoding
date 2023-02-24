
const cardArray = [
  {
    name: "1",
    img: "imgs/01.jpg",
    id: null,
    done: false
  },
  {
    name: "1",
    img: "imgs/01.jpg",
    id: null,
    done: false
  },
  {
    name: "2",
    img: "imgs/02.jpg",
    id: null,
    done: false
  },
  {
    name: "2",
    img: "imgs/02.jpg",
    id: null,
    done: false
  },
  {
    name: "3",
    img: "imgs/03.jpg",
    id: null,
    done: false
  },
  {
    name: "3",
    img: "imgs/03.jpg",
    id: null,
    done: false
  },
  {
    name: "4",
    img: "imgs/04.jpg",
    id: null,
    done: false
  },
  {
    name: "4",
    img: "imgs/04.jpg",
    id: null,
    done: false
  },
  {
    name: "5",
    img: "imgs/05.jpg",
    id: null,
    done: false
  },
  {
    name: "5",
    img: "imgs/05.jpg",
    id: null,
    done: false
  },
  {
    name: "6",
    img: "imgs/06.jpg",
    id: null,
    done: false
  },
  {
    name: "6",
    img: "imgs/06.jpg",
    id: null,
    done: false
  },
  {
    name: "7",
    img: "imgs/07.jpg",
    id: null,
    done: false
  },
  {
    name: "7",
    img: "imgs/07.jpg",
    id: null,
    done: false
  },
  {
    name: "8",
    img: "imgs/08.jpg",
    id: null,
    done: false
  },
  {
    name: "8",
    img: "imgs/08.jpg",
    id: null,
    done: false
  },
];

const gameDom = [];
let clickFirst = -1;
let clickSecond = -1;
let clickCount = 0;

///타이머 셋

const startGame = document.querySelector("button");
const $gameTimer = document.querySelector(".game-timer");
const $gameState = document.querySelector(".game-state");
const inner = document.querySelector(".container .row .column");
const TIME_LIMIT = 25;
const COUNT_NUMBER = 8;

function updateGameTimer(seconds) {
  $gameTimer.textContent = `${seconds}초`;
}

function startTimer() {
  let seconds = TIME_LIMIT;
  updateGameTimer(seconds);

  timer = setInterval(() => {
    if (seconds <= 0) {
      if(count.length === COUNT_NUMBER) {
        return;
      } else {
        clearInterval(timer);
        LoseGame();
      }
    } else {
      updateGameTimer(--seconds);
    }
  }, 1000);
};


//타임아웃일 때 화면
const LoseGame = () => {
  const loseimg = document.createElement("img");
  loseimg.setAttribute("src", "bgs/lose-bg1.jpg");
  loseimg.classList.add("loseImg");
  document.querySelector(".container").appendChild(loseimg);
};

const WinGame = () => {
  const winimg = document.createElement("img");
  winimg.setAttribute("src", "bgs/win-bg2.jpg");
  winimg.classList.add("winImg");
  document.querySelector(".container").appendChild(winimg);
};


const getGameDom = () => {
  const rows = document.querySelectorAll(".container .row");
  for (let i=0; i < rows.length; i++){
    gameDom[i] = rows[i].querySelectorAll(".column");
  }
};


const setIDtocardArray = () => {
  cardArray[0].id = "0-0";
  cardArray[1].id = "0-1";
  cardArray[2].id = "0-2";
  cardArray[3].id = "0-3";
  cardArray[4].id = "1-0";
  cardArray[5].id = "1-1";
  cardArray[6].id = "1-2";
  cardArray[7].id = "1-3";
  cardArray[8].id = "2-0";
  cardArray[9].id = "2-1";
  cardArray[10].id = "2-2";
  cardArray[11].id = "2-3";
  cardArray[12].id = "3-0";
  cardArray[13].id = "3-1";
  cardArray[14].id = "3-2";
  cardArray[15].id = "3-3";
}


//뒷면 사진을 넣어주는 함수
const createBoard = () => {
  for (let i = 0; i < gameDom.length; i++){
    for (let j = 0; j < gameDom[i].length; j++){
      const card = document.createElement("img");
      card.setAttribute("src", "bgs/square-bg.jpg")
      card.classList.add("eachImage")
      gameDom[i][j].appendChild(card);
    }
  }

};

const setClickHistory = (location) => {
  if (clickFirst === -1) {
    clickFirst = location;
  } else {
    clickSecond = location;
  }
}


const backFlip = () => {
  const parseIDFirst = cardArray[clickFirst].id.split("-");
  const parseIDSecond = cardArray[clickSecond].id.split("-");
  setTimeout(() =>{
    gameDom[parseIDFirst[0]][parseIDFirst[1]].querySelector("img").src=
    "bgs/square-bg.jpg";
    gameDom[parseIDSecond[0]][parseIDSecond[1]].querySelector("img").src=
    "bgs/square-bg.jpg";
  }, 500);
};

const count =[];

const isCorrect = () => {
  if(cardArray[clickFirst].name === cardArray[clickSecond].name){
    cardArray[clickFirst].done = true;
    cardArray[clickSecond].done = true;
    count.push('true');
    if (count.length !== COUNT_NUMBER) {
      $gameState.textContent = (COUNT_NUMBER - count.length)+'명';
    } else {
      $gameState.textContent = '0명';
      WinGame();
    };
  } else {
    backFlip();
  }
};


const flip = (location) => {
  if(!cardArray[location].done) {
    setClickHistory(location);
    const parseID = cardArray[location].id.split("-");
    gameDom[parseID[0]][parseID[1]].querySelector("img").src =
    cardArray[location].img;
    clickCount++;
    if (clickCount === 2) {
      clickCount = 0;
      isCorrect();

    }
    if (clickFirst !== -1 && clickSecond !== -1) {
      clickFirst = -1;
      clickSecond = -1;
    }
  }
};

onload = () => {
  getGameDom();
  cardArray.sort(() => 0.5 - Math.random());
  setIDtocardArray();

};

const restartGame = () => {
  const startbutton = document.querySelector(".button");
  const rebutton = document.createElement("button");
  rebutton.textContent = "재시작"
  rebutton.classList.add("restart")
  startbutton.style.display = 'none'
  document.querySelector("#buttons").appendChild(rebutton);
  const restartButton = document.querySelector(".restart");
  const reset = () => {
      window.location='index.html';
  };
  restartButton.addEventListener("click", reset);
};

const makeInfo = () => {
  const text_timer = document.querySelector(".game-timer-text");
  const text_state = document.querySelector(".game-state-text");
  const info_timer = document.querySelector(".game-timer");
  const info_state = document.querySelector(".game-state");

  text_timer.style.color = "black";
  text_state.style.color = "black";
  info_timer.style.color = "red";
  info_state.style.color = "red";
};




const removebg = () => {
  document.querySelector("#bg").remove();
};

const start = () => {
  createBoard();
  removebg();
  startTimer();
  restartGame();
  makeInfo();
};


startGame.addEventListener("click", start);
