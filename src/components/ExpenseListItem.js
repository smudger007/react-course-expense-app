import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {removeExpense} from '../actions/expenses';


const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div className='expense'>
        <Link 
            to={`/edit/${id}`}
        >
            <h3>{description}</h3>
        </Link>
        <p> {amount} {createdAt} </p>
        <button
            className="button button--link"
            onClick={(e) => {
                dispatch(removeExpense({id}));
            }}
        >
        Remove
        </button> 
    </div>
);

export default connect()(ExpenseListItem);