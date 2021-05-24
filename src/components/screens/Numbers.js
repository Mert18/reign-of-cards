import React, {useState, useEffect} from 'react'
import Layout from '../../core/Layout'
import {ThemeContext} from '../../lib/context';

import Card from '../Card';


const Numbers = () => {
    const [flipped, setFlipped] = useState(true);
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
    }, [])
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);
    
    const handleStartGame = () => {
        setFirst(Math.trunc(Math.random() * 100));
        setSecond(Math.trunc(Math.random() * 10));
        setFlipped(false);
        setTimeout(() => { setFlipped(true) }, 3000);
    }
    
    return (
        <ThemeContext.Provider value={{flipped, setFlipped}}>
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
                                    <div>
                                        <Card img={`/images/numbers/${arr[0]}.svg`} title="one of numbers" />
                                    </div>
                                    <div>
                                        <Card img={`/images/numbers/${arr[1]}.svg`} title="one of numbers" />
                                    </div>
                                    <div>
                                        <Card img={`/images/numbers/${arr[2]}.svg`} title="one of numbers" />
                                    </div>
                                    <div>
                                        <Card img={`/images/numbers/${arr[3]}.svg`} title="one of numbers" />
                                    </div>
                                    <div>
                                        <Card img={`/images/numbers/${arr[4]}.svg`} title="one of numbers" />
                                    </div>
                                    <div>
                                        <Card img={`/images/numbers/${arr[5]}.svg`} title="one of numbers" />
                                    </div>
                                    <div>
                                        <Card img={`/images/numbers/${arr[6]}.svg`} title="one of numbers" />
                                    </div>
                                    <div>
                                        <Card img={`/images/numbers/${arr[7]}.svg`} title="one of numbers" />
                                    </div>
                                    <div>
                                        <Card img={`/images/numbers/${arr[8]}.svg`} title="one of numbers" />
                                    </div>
                                    <div>
                                        <Card img={`/images/numbers/${arr[9]}.svg`} title="one of numbers" />
                                    </div>
                                    
                                </div>
                            </div>
                        </section>
                    </div>
                    
                </div>
            </Layout>
        </ThemeContext.Provider>
    )
}

export default Numbers
