import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1 style={{ color: "red" }}>MISSILE GUN STORE</h1>
            <nav
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <CustomLink style={{ paddingRight: "50px", textDecoration: "none", }} to="/">Home</CustomLink>
                <CustomLink style={{ paddingRight: "50px", textDecoration: "none", }} to="/reviews">Reviews</CustomLink>
                <CustomLink style={{ paddingRight: "50px", textDecoration: "none", }} to="/about">About</CustomLink>
                <CustomLink style={{ paddingRight: "50px", textDecoration: "none", }} to="/dashboard">Dashboard</CustomLink>
                <CustomLink style={{ paddingRight: "50px", textDecoration: "none", }} to="/blogs">Blogs</CustomLink>

            </nav>
            <hr />




        </div>
    );
};

export default Header;