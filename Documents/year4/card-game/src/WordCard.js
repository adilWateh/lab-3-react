import React, { useState} from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props) {

    const [state, setState] = useState(prepareStateFromWord(props.value))
    console.log(state)
    function resetGame() {
        setState({...state, guess: '',attempt: state.attempt + 1})
    }

    function handleClick() {
        resetGame()
    }

    

    const activationHandler = c => {
        console.log(`${c} has been activated`)
        let guess = state.guess + c
        setState({...state, guess})
        if(state.guess.length === state.word.length){
            if(state.guess === state.word){
                console.log('yeah!')
                setState({...state, completed: true})
                
            }
            else{
                console.log('reset, next attempt')
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }
        

        console.log(guess)
    }

    

    
    
    return (
        <div >
            {
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                )
            }
            <div >
                <button onClick={handleClick}>Reword/reset</button>
            </div>
            <div >
                <br />
                <h1>{state.guess}</h1>
                {
                    state.guess.length == state.word.length && <h1>{state.guess == state.word? 'correct' : 'uncorrect'}</h1>
                }
            </div>
        </div>
    )
}