import { 
  startAddExpense, 
  addExpense, 
  startEditExpense,
  editExpense, 
  startRemoveExpense, 
  removeExpense, 
  setExpenses, 
  startSetExpenses 
} from '../../actions/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import expenses from '../fixtures/expenses';

const uid = "thisismytestuid";
const defaultAuthState = { auth: { uid }};
const createMockStore = configureMockStore([thunk]);


beforeEach((done) => {

  const expensesData = {};
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = {description, note, amount, createdAt};
  });
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());

});

test('Should add an expense to the database and store', (done) => {

  const store = createMockStore(defaultAuthState);

  const expenseData = {
    description: 'chips', 
    amount: 2.20, 
    note: 'from the chippy - mmmmmmm', 
    createdAt: 33445534
  };

  store.dispatch(startAddExpense(expenseData)).then( () => {

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE', 
      expense: {
        id: expect.any(String), 
        ...expenseData
      }
    });

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value'); 

  }).then((snapshot) => { 
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('Should add an expense with defaults to the database and store', (done) => {

  const store = createMockStore(defaultAuthState);

  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };

  store.dispatch(startAddExpense({})).then( () => {

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE', 
      expense: {
        id: expect.any(String), 
        ...expenseDefaults
      }
    });

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value'); 

  }).then((snapshot) => { 
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
  });

});




test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should remove expense from firebase', (done) => {

  const store = createMockStore({ auth: { uid }});
  const id = expenses[2].id;

  store.dispatch(startRemoveExpense({ id })).then(() => {

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE', 
      id
    });

    return database.ref(`users/${uid}/expenses/${id}`).once('value');

  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('Should edit an expense in firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;

  const updates = {
    description: 'I have been updated', 
    amount: 666.66, 
    note: 'Yo an updated note',
    createdAt: 33444555
  };

  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });

    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(updates);
    done();
  });

});

test('should setup add expense action object with provided values', () => {
  
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,      
    }
  });
});

test('Should setup Set Expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES', 
    expenses
  });
});


test('should fetch expenses from firebase', (done) => {

  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(action[0]).toEqual({
      type: SET_EXPENSES, 
      expenses
    });
  });
  done();
});
