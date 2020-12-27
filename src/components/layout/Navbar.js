import React from 'react';
import PropTypes from 'prop-types';
import UserItem from '../users/UserItem';


const Navbar = props => {

    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className='fab fa-github' /> {props.title}
            </h1>
        </nav>
    )

}

Navbar.defaultProps = {
    title: "Title"
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default Navbar

