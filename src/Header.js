import React from 'react';

function Header(props) {
    return (
        <div>
            <h1>Name is {props.name} and ID is {props.id}</h1>
        </div>
    )
}

export default Header;