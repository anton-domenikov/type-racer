export const SpeedToData = (wordsTyped, sec, symbols) => {

    if (symbols !== 0 && sec !== 0) {
        const wpm = (wordsTyped.length / (sec / 60));
        const cpm = (symbols / (sec / 60))
        return {
            wpm: Math.round(wpm),
            cpm: Math.round(cpm),
        }
    }

    return null;
}