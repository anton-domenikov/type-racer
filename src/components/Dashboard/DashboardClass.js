import { Component } from 'react';
import Logout from '../Logout/Logout';
import { Speed } from '../Helpers/Speed';
import { TextPreview } from '../Helpers/TextPreview';
import FinishedDashboard from './FinishedDashboard';
import { chooseRandom } from '../Helpers/ChooseRandomWords';
import Timer from '../Helpers/Timer';
import Header from '../Header/Header';
import { SpeedToData } from '../Helpers/SpeedToData';
import { GameData } from '../Data/SimpleData';
import moment from 'moment';

import './Dashboard.css'

const words = require('an-array-of-english-words')
// console.log(words);

const initialState = {
    userInput: '',
    symbols: 0,
    seconds: 0,
    secondsToShow: 0,
    minutesToShow: 0,
    started: false,
    finished: false,
}

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = initialState;
        this.wordsToTypeArray = chooseRandom(words, 100);
        this.correctWordsTyped = []
        // this.stopwatch = {
        //     minutes: 0,
        //     seconds: 0,
        //     // milliseconds: 0,
        // }
    }

    onRestart = () => {
        this.setState(initialState);
        this.wordsToTypeArray = chooseRandom(words, 100);
        this.correctWordsTyped = [];
        // this.stopwatch = {
        //     minutes: 0,
        //     seconds: 0,
        //     // milliseconds: 0,
        // }
    }

    onUserInputChange = (e) => {
        const currentUserInput = e.target.value;
        this.setTimerForCalcs();
        // this.setTimerToShow();
        this.setState(prevState => ({
            ...prevState,
            userInput: currentUserInput,
        }))

        if (currentUserInput[currentUserInput.length - 1] === ' ') {
            let currentWord = currentUserInput.trim()
            if (this.wordsToTypeArray.includes(currentWord)) {
                this.setState(prevState => ({
                    ...prevState,
                    userInput: '',
                    symbols: prevState.symbols + currentWord.length,
                }))
                this.correctWordsTyped.push(currentWord);
            }
        }
        // console.log(this.state);
        // console.log(this.correctWordsTyped);

        this.onFinish(this.correctWordsTyped);
    }


    onFinish(correctWordsTyped) {
        if (correctWordsTyped.length === this.wordsToTypeArray.length) {
            clearInterval(this.interval);

            let { wpm, cpm } = SpeedToData(this.correctWordsTyped, this.state.seconds, this.state.symbols);
            // console.log(wpm, cpm);
            GameData.push({ wpm, cpm, date: moment().format('Do MMMM YYYY; HH:mm:ss') })
            // console.log('gamedata', GameData);
            // clearInterval(this.millisecondsInterval);
            this.setState((prevState) => ({
                ...prevState,
                userInput: '',
                finished: true
            }))
            // console.log(this.state);
        }
    }


    setTimerForCalcs() {
        if (!this.state.started) {
            this.setState({ started: true });
            this.interval = setInterval(() => {
                this.setState(prevState => {
                    return {
                        ...prevState,
                        seconds: prevState.seconds + 1,
                        secondsToShow: prevState.secondsToShow + 1,
                    }
                })
            }, 1000);
            if (this.state.secondsToShow > 59) {
                this.setState(prevState => ({
                    ...prevState,
                    secondsToShow: 0,
                    minutesToShow: prevState.minutesToShow + 1,
                }))

            }
            // this.stopwatch.minutes = this.state.minutesToShow;
            // this.stopwatch.seconds = this.state.secondsToShow;
        }
    }

    // setTimerToShow() {
    //     this.millisecondsInterval = setInterval(() => {
    //         this.stopwatch.seconds += 1
    //     }, 1000);
    //     console.log(this.stopwatch);
    //     if (this.stopwatch.seconds > 59) {
    //         this.stopwatch.seconds = 0;
    //         this.stopwatch.minutes += 1;
    //     }
    // }

    render() {
        if (this.state.finished === false) {
            return (
                <>
                    <Header></Header>
                    <div className="typing-challenge">
                        <Timer
                            // time={this.stopwatch}
                            seconds={this.state.secondsToShow}
                            minutes={this.state.minutesToShow}
                            completed={this.state.finished}
                        ></Timer>

                        <div className="words-to-type-container">
                            <TextPreview
                                text={this.wordsToTypeArray}
                                userInput={this.state.userInput}
                                wordsToDim={this.correctWordsTyped}
                            ></TextPreview>
                        </div>

                        <input className="input-typing"
                            value={this.state.userInput}
                            onChange={this.onUserInputChange}
                            placeholder="Start typing here..."
                        ></input>

                        <Speed wordsTyped={this.correctWordsTyped} sec={this.state.seconds} symbols={this.state.symbols}></Speed>

                        <br />

                        <Logout history={this.props.history}></Logout>
                    </div >
                </>
            )
        } else {
            return (
                <>
                    <Header></Header>

                    <FinishedDashboard
                        state={this.state}
                        history={this.props.history}
                        onRestart={this.onRestart}
                        wordsToTypeArray={this.wordsToTypeArray}
                        correctWordsTyped={this.correctWordsTyped}
                        seconds={this.state.secondsToShow}
                        minutes={this.state.minutesToShow}
                        completed={this.state.finished}
                    />
                </>
            )
        }
    }

}

export default Dashboard;