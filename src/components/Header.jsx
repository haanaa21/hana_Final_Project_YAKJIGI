import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <h3>헤더입니다.</h3>
            <Link to="/">Main 페이지</Link>
            <Link to="/Sub101">Sub101가는 페이지</Link>
            <Link to="/Sub301">Sub301가는 페이지</Link>
            <Link to="/Sub403">Sub403가는 페이지</Link>
        </div>
    );
}

export default Header;