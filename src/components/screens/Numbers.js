import React, {useState, useEffect} from 'react'
import Layout from '../../core/Layout'

const Numbers = () => {

    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    
    useEffect(() => {

    })

    const handleStartGame = (e) => {
        e.preventDefault();
        setFirst(Math.trunc(Math.random() * 100))
        setSecond(Math.trunc(Math.random() * 10))
    }
    return (
        <Layout>
            <div className="numbers">
                <div className="numbers__hero">
                    <h2>This is the numbers section. You will find number related games here. Have fun!</h2>
                </div>
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
                                    {/* CARDS WILL BE DROPPED HERE. */}
                                </div>
                            </div>
                            
                            <div className="gameone__game__right">
                                {/* CARDS WILL BE LOCATED HERE INITIALLY. */}
                            </div>
                        </div>
                    </section>
                </div>
                
            </div>
        </Layout>
    )
}

export default Numbers
