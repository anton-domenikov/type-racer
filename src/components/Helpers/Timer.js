function Timer(props) {
    // console.log(props);

    let minutes = props.minutes;
    let seconds = props.seconds;
    // let milliseconds = props.time.milliseconds;

    let completed = props.completed;


    // console.log('milliseconds',milliseconds);

    // if (milliseconds > 999) {
    //     milliseconds = 0;
    //     console.log(milliseconds);
    //     seconds += 1;
    // }
    // if (seconds === 60) {
    //     seconds = 0;
    //     minutes += 1;
    // }

    if (!completed) {
        return (
            <div className="timer">
                {('0' + minutes).slice(-2)}:{('0' + seconds).slice(-2)}
            </div>
        )
    } else {
        // console.log(minutes);
        return (
            <div className="timer" style={{ color: "green" }}>
                {('0' + minutes).slice(-2)}:{('0' + seconds).slice(-2)}
            </div>
        )
    }
}

export default Timer