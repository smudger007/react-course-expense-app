import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'


export const ExpensesSummary = ({expensesCount, expensesTotal}) => {

    const expensesTerm = expensesCount === 1 ? "expense" : "expenses";
    const formattedAmount = numeral(expensesTotal / 100).format('$0,0.00');

    return (
        <div>
            <h1>Displaying {expensesCount} {expensesTerm} totalling {formattedAmount} </h1>
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