// import { useState, useEffect, useContext } from 'react';
// import Logout from '../Logout/Logout';
// // import TextPreview from './TextPreview';

// import './Dashboard.css'

// const words = require('an-array-of-english-words')
// console.log(words);

// const chooseRandom = (arr, num = 1) => {
//     const res = [];
//     for (let i = 0; i < num;) {
//         const random = Math.floor(Math.random() * arr.length);
//         if (res.indexOf(arr[random]) !== -1) {
//             continue;
//         };
//         res.push(arr[random]);
//         i++;
//     };
//     return res;
// };

// const wordsToTypeArray = chooseRandom(words, 3);
// console.log(wordsToTypeArray);

// const initialState = {
//     wordsToTypeArray,
//     userInput: '',
//     symbols: 0,
//     seconds: 0,
//     started: false,
//     finished: false
// }

// function Dashboard({ history }) {
//     const [state, setState] = useState({wordsToTypeArray, userInput: '', correctWordsTyped: []});

//     useEffect(() => {
//         setState(initialState);
//         console.log(state);
//     }, []);

//     console.log(state);

//     return (
//         <div className="typing-challenge">
//             Dashboard
//             <div className="timer-container">
//                 <p className="timer">00:30</p>
//                 <p className="timer-info">Start typing to start the test</p>
//             </div>

//             <div className="textarea-container">
//                 <div className="textarea-up ">
//                     <TextPreview
//                         text={state.wordsToTypeArray}
//                         userInput={state.userInput}
//                         wordToDim={state.correctWordsTyped}
//                     ></TextPreview>
//                 </div>
//                 <div className="textarea-down">
//                     <textarea
//                         // onChange={(e) => handleOnType(e.target.value)}
//                         className="textarea2"
//                         placeholder="Start typing here..."
//                     ></textarea>
//                 </div>
//             </div>


//             <br />

//             <Logout history={history}></Logout>
//         </div>
//     )
// }

// export default Dashboard;