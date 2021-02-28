import React from 'react';
import './sum.css'

const Sum = (props) => {
    const wage = props.sum;
    const salary = wage.reduce((total,wage) => total + Number(wage.salary),0)
    
    
    return (
        <div className='container'>
            <p>Selected User: {props.sum.length}</p>
            <p>Total Salary: {salary}</p>
        </div>
    );
};

export default Sum;