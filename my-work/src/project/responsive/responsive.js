import React from 'react';
import './responsive.css';


//Media query>> its a way to make responsive design for any websites. whenever our screen is resize we will tell if screen width
// becomes this then u have to add some specific css in page


const Responsive = () => {
    return (
        <div>
            <div className='box'id='box-1'>I am iphone</div>
            <div className='box'id='box-2'>I am tablet</div>
            <div className='box'id='box-3'>I am  desktop computer</div>
            <div className='box'id='box-4'>I am wide screen computer</div>
        </div>
    );
};

export default Responsive;