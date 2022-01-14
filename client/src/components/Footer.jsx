import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='footer'>
           <div className="social-icons">
            <img
                className='github-icon'
                src='https://cdn3.iconfinder.com/data/icons/inficons/512/github.png'
                alt="github icon"
             />
             <br/>
             <br/> 
             <img
                className='li-icon'
                src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
                alt="linkedin icon"
             /> 
             </div>
        </footer>
    )
}
