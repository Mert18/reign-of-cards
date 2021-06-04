import React, {useState, useEffect, Fragment} from 'react'
import Layout from '../../core/Layout'
import {ThemeContext} from '../../lib/context';


import Card from '../Card';


const Numbers = React.memo(() => {

    const [flipped, setFlipped] = useState(true);
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [numbers, setNumbers] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [message, setMessage] = useState("");
    const [gameState, setGameState] = useState(false);
    const [difficulty, setDifficulty] = useState("medium");
    const [index, setIndex] = useState(false);
    const [indexTwo, setIndexTwo] = useState(true);
    const [indexThree, setIndexThree] = useState(false);

    useEffect(() => {
        if(parseInt(answers.join("")) === first*second){
            setFlipped(false);
            setMessage("Congratulations!");
            setTimeout(() => {
                setFlipped(false);
            }, 2000)
        }
        if(answers.length === 3 && parseInt(answers.join("")) !== first*second){
            setFlipped(false);
            setMessage(`You Failed! Correct answer is ${first*second}`)
            setTimeout(() => {
                setFlipped(false);
            }, 4000)
        }
    }, [answers, first, second])

    const handleStartGame = (e) => {
        e.preventDefault();
        setFlipped(true);
        setGameState(true);
        setAnswers([]);
        setMessage("");
        setNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5));
        

        if(difficulty === "easy"){
            setFirst(Math.trunc(Math.random() *8 + 3) * 5);
            setSecond(Math.trunc(Math.random() * 12 +3));
            if(message !== ""){
                setTimeout(() => { setFlipped(false)}, 1000);
            }else{
                setTimeout(() => { setFlipped(false)}, 1000);
                setTimeout(() => { setFlipped(true) }, 4000);
            }
        } else if(difficulty === "medium"){
            setFirst(Math.trunc(Math.random() * 30 + 11));
            setSecond(Math.trunc(Math.random() * 10 +5));
            if(message){
                setTimeout(() => { setFlipped(false)}, 1000);
            }else{
                setTimeout(() => { setFlipped(false)}, 1000);
                setTimeout(() => { setFlipped(true) }, 4000);
            }
        } else if(difficulty === "hard"){
            setFirst(Math.trunc(Math.random() * 40 + 10));
            setSecond(Math.trunc(Math.random() * 20 +10));
            if(message){
                setTimeout(() => { setFlipped(false)}, 1000);
            }else{
                setTimeout(() => { setFlipped(false)}, 1000);
                setTimeout(() => { setFlipped(true) }, 4000);
            }
        }
        
        
    }

    return (
        <ThemeContext.Provider value={{flipped, setFlipped}}>
            <Layout>
                <div className="game">

                    <div className="game__head">
                        <div className="game__head__exp">
                            <p>Random arithmetic operation appears on the screen, then the numbers show up but they will be flipped after 2 seconds. You will remember the numbers and put them in the correct order. Good luck!</p>
                        </div>
                        
                        <div className="difficulty">
                            <p className={index ? 'active' : ''} id="easy" onClick={() => {setDifficulty("easy"); setIndex(true); setIndexTwo(false); setIndexThree(false)}}>Easy</p>
                            <p className={indexTwo ? 'active' : ''} id="medium" onClick={() => {setDifficulty("medium"); setIndexTwo(true); setIndexThree(false); setIndex(false)}}>Medium</p>
                            <p className={indexThree ? 'active' : ''} id="hard" onClick={() => {setDifficulty("hard"); setIndexThree(true); setIndex(false); setIndexTwo(false)}}>Hard</p>
                        </div>
                        <div className="start">
                            <p onClick={handleStartGame}>START</p>
                        </div>
                    </div>


                    <div className="game__main">
                        <div className="game__main__left">
                            <div className="game__main__left__operation">
                                <p>{first} x {second} ?</p>
                            </div>

                            <div className="game__main__left__answer">
                                <div className="game__main__left__answer__message">
                                    <p>{message}</p>
                                </div>

                                <div className="game__main__left__answer__boxes">
                                    {answers ? (answers.map((el) => (
                                        <Card img={`/images/numbers/${el}.svg`} title="one of numbers" />
                                    ))) 
                                    :
                                    <div>
                                    
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                                
                        <div className="game__main__right">
                            {gameState ? <div className="game__main__right__cards">
                                <div onClick={() => setAnswers((answers) => [...answers, numbers[0]])}>
                                    <Card img={`/images/numbers/${numbers[0]}.svg`} title="one of numbers" />
                                </div>
                                <div onClick={() => setAnswers((answers) => [...answers, numbers[1]])}>
                                    <Card img={`/images/numbers/${numbers[1]}.svg`} title="one of numbers" />
                                </div>
                                <div onClick={() => setAnswers((answers) => [...answers, numbers[2]])}>
                                    <Card img={`/images/numbers/${numbers[2]}.svg`} title="one of numbers" />
                                </div>
                                <div onClick={() => setAnswers((answers) => [...answers, numbers[3]])}>
                                    <Card img={`/images/numbers/${numbers[3]}.svg`} title="one of numbers" />
                                </div>
                                <div onClick={() => setAnswers((answers) => [...answers, numbers[4]])}>
                                    <Card img={`/images/numbers/${numbers[4]}.svg`} title="one of numbers" />
                                </div>
                                <div onClick={() => setAnswers((answers) => [...answers, numbers[5]])}>
                                    <Card img={`/images/numbers/${numbers[5]}.svg`} title="one of numbers" />
                                </div>
                                <div onClick={() => setAnswers((answers) => [...answers, numbers[6]])}>
                                    <Card img={`/images/numbers/${numbers[6]}.svg`} title="one of numbers" />
                                </div>
                                <div onClick={() => setAnswers((answers) => [...answers, numbers[7]])}>
                                    <Card img={`/images/numbers/${numbers[7]}.svg`} title="one of numbers" />
                                </div>
                                <div onClick={() => setAnswers((answers) => [...answers, numbers[8]])}>
                                    <Card img={`/images/numbers/${numbers[8]}.svg`} title="one of numbers" />
                                </div>
                                <div onClick={() => setAnswers((answers) => [...answers, numbers[9]])}>
                                    <Card img={`/images/numbers/${numbers[9]}.svg`} title="one of numbers" />
                                </div>
                                    </div> : <div></div>}
                                </div>
                            </div>
                    </div>
            </Layout>
        </ThemeContext.Provider>
    )
})

export default Numbers
