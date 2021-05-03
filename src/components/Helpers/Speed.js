export default (props) => {

    if (props.symbols !== 0 && props.sec !== 0) {
        const wpm = (props.wordsTyped.length / (props.sec / 60));
        // const wpm = (props.symbols / 5) / (props.sec / 60);
        const cpm = (props.symbols / (props.sec / 60))
        return (
            <div className="words-chars-counter" style={{flexDirection: "row"}}>
                <div className="wpm">WPM: {Math.round(wpm)}</div> 
                <div className="cpm">CPM: {Math.round(cpm)}</div> 
            </div>
        )
    }

    return null;
}