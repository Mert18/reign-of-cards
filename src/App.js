import React, {useEffect, useState} from 'react';
import Layout from './core/Layout';
import randomColor from 'randomcolor';
import {Link} from 'react-router-dom';

const App = () => {
    return(
        <Layout>
            <div className="main">
                <div className="game">

                    <div className="game__text">
                        <div className="game__text__title">
                            <h1>Numbers</h1>
                        </div>
                        <div className="game__text__text">
                            <p>Will you remember the numbers and calculate the operation at the same time?</p>
                        </div>
                        <div className="game__text__start">
                            <Link to='/numbers'>PLAY</Link>
                        </div>
                    </div>

                    <div className="game__img">
                        <img src="/images/numbers.jpg" alt="numbers game" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default App;