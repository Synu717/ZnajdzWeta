import React, { useState, useContext } from 'react';
import './Banner.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { LoginWindow } from '../../LoginWindow/LoginWindow';

import { PrivateRoute } from '../../PrivateRoute';
import { UserPanel } from '../../UserPanel/UserPanel';
import { AuthContext } from "../../../Auth.js";

export const Banner = () => {
    const [loginVisible, setLoginVisible] = useState(false);

    const { currentUser } = useContext(AuthContext);

    const isLoggedIn = () => {

        if(currentUser) {
            return <PrivateRoute component={UserPanel} />
        } else {
            return (
                <>
                    <button onClick={()=>setLoginVisible(!loginVisible)}>
                        {loginVisible ? <h3>Zamknij</h3> : <h3>Zaloguj</h3>}
                        {loginVisible ? <p><FontAwesomeIcon icon={faTimesCircle}/></p> : <p><FontAwesomeIcon icon={faUserCircle}/></p> }
                    </button>
                    {loginVisible ? <LoginWindow/> : null}
                </>
            )
        }
    }

    return (
        <header className='banner'>
            <div className='title--box'>
                <h1 className='title'>ZnajdźWeta</h1>
                <p>Zaufało nam już { 0 } weterynarzy z całej Polski!</p> {/*(tu będzie liczba zarejestrowanych uytkowników)*/}
            </div>
            
            <div className='user'>
                {isLoggedIn()}
            </div>
        </header>
    );
}