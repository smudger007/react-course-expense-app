import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {                       
                console.log('expense');
            }}    
        />
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);

