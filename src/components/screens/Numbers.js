import React, {useState, useEffect} from 'react'
import Layout from '../../core/Layout'
import {ThemeContext} from '../../lib/context';


import Card from '../Card';


const Numbers = React.memo(() => {

    const [flipped, setFlipped] = useState(true);
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [numbers, setNumbers] = useState([]);

    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        console.log(answers);
        
    }, [answers, first, second])
    const handleStartGame = (e) => {
        setAnswers([]);
        e.preventDefault();
        setNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5));
        setFirst(Math.trunc(Math.random() * 100));
        setSecond(Math.trunc(Math.random() * 10));
        setTimeout(() => { setFlipped(false)}, 1000)
        setTimeout(() => { setFlipped(true) }, 3000);
    }
    
    return (
        <ThemeContext.Provider value={{flipped, setFlipped}}>
            <Layout>
                <div className="numbers">
                    <div className="numbers__games">
                        <section className="gameone">
                            <div className="gameone__title">
                                <h2>Random arithmetic operations appear on the screen, then the numbers show up and they will be flipped instantly. You will remember the numbers and put them in the correct order. Good luck!</h2>
                                <h4 onClick={handleStartGame}>START</h4>
                                <h3>GAME 1</h3>
                            </div>
                            <div className="gameone__game">
                                <div className="gameone__game__left">
                                    <div className="operation">
                                        <h2>{first} x {second} ?</h2>
                                    </div>
                                    <div className="answer">
                                        {parseInt(answers.join("")) === first*second ? <div>Congratulations!</div> : <div></div>}
                          {              <div className="answer__boxes">
                                            {answers ? (
                                                answers.map((el) => (
                                                <Card img={`/images/numbers/${el}.svg`} title="one of numbers" />
                                            ))) 
                                            :
                                            <div>
                                                
                                            </div>
                                            }
                                            
                                            
                                        </div>}
                                    </div>
                                </div>
                                
                                <div className="gameone__game__right">

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
                                    
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Layout>
        </ThemeContext.Provider>
    )
})

export default Numbers
