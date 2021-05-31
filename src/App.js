import React, {useEffect, useState} from 'react';
import Layout from './core/Layout';
import randomColor from 'randomcolor';
import {Link} from 'react-router-dom';

const App = () => {

    const [color, setColor] = useState("green");

    useEffect(() => {
        setTimeout(() => {
            setColor(randomColor());
        }, 3000)
    }, [color]);

    const divStyle = {
        color: color,
      };

    return(
        <Layout>
            <div className="main">
                <div className="main__welcome">
                    <div>
                        <h1>Welcome to</h1>
                    </div>
                    <div style={divStyle} className="main__welcome__colorized">
                        <h1>Reign of Cards</h1>
                    </div>
                </div>

                <div className="main__games">
                    <Link to="/numbers">
                        <div className="game">
                            <div className="game__title">
                                <h1>Numbers</h1>
                            </div>
                            <div className="game__overlay">
                                <div className="game__overlay__content">
                                    <h2>Will you remember the numbers and calculate the operation at the same time?</h2>
                                </div>
                            </div>
                            <img src="/images/kindred.svg" alt="numbers game" />
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default App;