import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'


export const ExpensesSummary = ({expensesCount, expensesTotal}) => {

    const expensesTerm = expensesCount === 1 ? "expense" : "expenses";
    const formattedAmount = numeral(expensesTotal / 100).format('$0,0.00');

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Displaying <span>{expensesCount}</span> {expensesTerm} totalling <span>{formattedAmount}</span> </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>   
            </div>                     
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expensesCount: visibleExpenses.length, 
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);