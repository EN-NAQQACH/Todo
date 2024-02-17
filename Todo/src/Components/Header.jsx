import React from 'react';
import '../Styles/Header.css';

function Header() {
    return (
        <div>
            <div className="header">
                <div className="content">
                    <div className="logo">
                        <p>Todos</p>
                    </div>
                    <div className="buttons">
                        <button>Sign in</button>
                        <button>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;