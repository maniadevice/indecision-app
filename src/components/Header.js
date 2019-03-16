import React from 'react'

// stateless functional component 
// refer to original playground/original-class-components.js to refer to the original doc
const Header = (props) => (
    <div className='header'>
        <div className='container'>
            <h1 className='header__title'>{props.title}</h1>
            <h2 className='header__subtitle'>{props.subtitle}</h2>
        </div>
    </div>
)


Header.defaultProps = {
    title: 'Indecision!'
}


export default Header;