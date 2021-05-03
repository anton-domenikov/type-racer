export const TextPreview = (props) => {
    console.log(props);
    const text = props.text;
    const wordsToDim = props.wordsToDim
    // const userInput = props.userInput
    // console.log(text);

    return (
        <div className="textarea">
            {
                text.map((word, index) => {
                    // console.log(word, index);
                    let color = "#000000";
                    if (wordsToDim) {
                        if (wordsToDim.includes(word)) {
                            color = "#ad9f97"
                            // console.log('it does include the word');
                            return <span
                                key={index} style={{ color: color, fontWeight: "500" }}>{word}{' '}
                            </span>
                        }
                    }

                    return <span
                        key={index} style={{ color: color, fontWeight: "500" }}>{word}{' '}
                    </span>
                })
            }
        </div>

    )
}