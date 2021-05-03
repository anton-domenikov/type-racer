import { useState, useEffect, useContext } from 'react';
import Logout from '../Logout/Logout';
import Speed from './Speed';
// import TextPreview from './TextPreview';

import './Dashboard.css'

const words = require('an-array-of-english-words')
console.log(words);

const chooseRandom = (arr, num = 1) => {
    const res = [];
    for (let i = 0; i < num;) {
        const random = Math.floor(Math.random() * arr.length);
        if (res.indexOf(arr[random]) !== -1) {
            continue;
        };
        res.push(arr[random]);
        i++;
    };
    return res;
};

const wordsToTypeArray = chooseRandom(words, 3);
console.log(wordsToTypeArray);

const initialState = {
    wordsToTypeArray,
    userInput: '',
    symbols: 0,
    seconds: 0,
    started: false,
    finished: false,
    correctWordsTyped: []
}

function Dashboard({ history }) {
    const [state, setState] = useState({ wordsToTypeArray, userInput: '', correctWordsTyped: [] });

    useEffect(() => {
        setState(initialState);
        console.log('in useEffect',state);
    }, []);

    console.log('component', state);

    const onUserInputChange = (e) => {
        const currentUserInput = e.target.value;
        setTimer();
        onFinish(currentUserInput)
        setState((prevState) => {
            return {
                ...prevState,
                userInput: currentUserInput,
                symbols: prevState.symbols + currentUserInput.length
            }
        })
        console.log('state in userinputchange', state);
    }

    const setTimer = () => {
        if (!state.started) {
            setState({ started: true });
            let interval = setInterval(() => {
                setState((prevProps) => {
                    return {...prevProps, seconds: prevProps.seconds + 1 }
                })
            }, 1000)
        }
        console.log('state in setTimer', state);

    }

    const onFinish = (userInput) => {
        if (userInput === state.wordsToTypeArray) {
        //   clearInterval(interval);
          setState({
            finished: true
          })
        }
      }

    return (
        <div className="typing-challenge">
            Dashboard
            <div className="timer">
                <p className="timer">00:30</p>
            </div>

            <div className="textarea-container">
                <div className="textarea-up ">
                    <TextPreview
                        text={state.wordsToTypeArray}
                        userInput={state.userInput}
                        wordToDim={state.correctWordsTyped}
                    ></TextPreview>
                </div>
                <div className="textarea-down">
                    <textarea
                        value={state.userInput}
                        onChange={onUserInputChange}
                        className="textarea2"
                        placeholder="Start typing here..."
                    ></textarea>
                </div>

                <Speed sec={state.seconds} symbols={state.symbols}></Speed>
            </div>


            <br />

            <Logout history={history}></Logout>
        </div>
    )
}

export default Dashboard;