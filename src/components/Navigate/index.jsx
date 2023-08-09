import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { NavList, NavItem } from './styles'; 

import { Context } from '../../utils/context';
const Navigate = () => {
    const { burgerActive } = useContext(Context);
    return (
        <NavList burgerActive ={burgerActive}>
            <NavItem><Link to="/"> Shop</Link></NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>Story</NavItem>
        </NavList>
    );
};

export default Navigate;