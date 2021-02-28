import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEnvelope , faUser, faVenusMars, faDollarSign , faHome } from '@fortawesome/free-solid-svg-icons';


const User = (props) => {
    console.log(props.user)
    const {name,email,img,salary,city,gender} = props.user;
    return (
        <div className='card-container'>
           
           <div className="list-container">
            <div className="image-container">
                    <img src={img} alt=""/>
                </div>

                <div className="details">
                    <h3><FontAwesomeIcon icon={faUser} /> {name}</h3>
                    <p><FontAwesomeIcon icon={faVenusMars} /> {gender}</p>
                    <p><FontAwesomeIcon icon={faHome} /> {city}</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> {email}</p>
                    <p><FontAwesomeIcon icon={faDollarSign} /> {salary}</p>
                    <button onClick={() => props.handleEvent(props.user)} className='button'> <FontAwesomeIcon icon={faPlus} /> Add User</button>
                </div>
           </div>
           
         
         
        </div>
        
        
    );
};

export default User;