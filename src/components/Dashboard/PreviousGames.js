import Header from '../Header/Header';
import { GameData } from '../Data/SimpleData';
import Logout from '../Logout/Logout';
import './PreviousGames.css'

function PreviousGames(props) {
    let currentOldGames = GameData;
    return (
        <>
            <Header></Header>
            <div className="previous-games"><span>Your games:</span>
                {
                    currentOldGames.map(oldGame => {
                        return (
                            <div className="old-game">
                                <div className="calculations">
                                    <div className="wpm-old-game">WPM: {oldGame.wpm}</div>
                                    <div className="cpm-old-game">CPM: {oldGame.cpm}</div>
                                </div>
                                <div className="date-old-game">{oldGame.date}</div>
                            </div>
                        )
                    })
                }
            </div>

            <Logout history={props.history}></Logout>

        </>
    )
}

export default PreviousGames;