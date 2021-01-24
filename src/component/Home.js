import React, { Component } from 'react';

function Home({name , email}) {
   {
        return (
            <div>
                <h1>Home</h1>
                <h2>{name}</h2>
                <h3>{email}</h3>
            </div>
        );
    }
}

export default Home;