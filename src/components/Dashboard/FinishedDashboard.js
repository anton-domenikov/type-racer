import Logout from '../Logout/Logout';
import { Speed } from '../Helpers/Speed';
// import SpeedToData from '../Helpers/SpeedToData';
import Timer from '../Helpers/Timer';
// import { GameData } from '../Data/SimpleData';

function FinishedDashboard(props) {
    // let { wpm, cpm } = SpeedToData(props.correctWordsTyped, props.state.seconds, props.state.symbols);
    // console.log(wpm, cpm);

    // GameData.push({wpm, cpm, date: Date.now()})
    // console.log('gamedata',GameData);

    console.log(props);
    return (

        <div className="typing-challenge">
            <Timer
                time={props.time}
                seconds={props.seconds}
                minutes={props.minutes}
                completed={props.completed}
            ></Timer>

            <div className="words-to-type-container">
                <div className="textarea" style={{ color: "#ad9f97", fontWeight: "500" }}>
                    {props.wordsToTypeArray.join(' ')}
                    <button
                        className="try-again-btn"
                        onClick={props.onRestart}
                    >Try Again?</button>
                </div>

            </div>
            <input className="input-typing"
                value=""
                readOnly={true}
            ></input>

            <Speed wordsTyped={props.correctWordsTyped} sec={props.state.seconds} symbols={props.state.symbols}></Speed>



            <br />

            <Logout history={props.history}></Logout>
        </div >
    );
}

export default FinishedDashboard;