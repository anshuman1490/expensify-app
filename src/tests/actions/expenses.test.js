import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense', ()=>{
    const action=removeExpense({id:'1234qwer'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'1234qwer'
    });
});

test('should setup edit expense', ()=>{
    const updates={id:'1234qwer', description:'my bill'};
    const action=editExpense('1234qwer',updates);
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'1234qwer',
        updates:updates
    });
});

test('should set up add expense with provided value', ()=>{
    const expenseData={
        description:'Rent',
        amount: 11765,
        createdAt:1000,
        note:'This is my house rent'

    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    });
});

test('should set up expense value with default', ()=>{
    const action=addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
            description:'',
            note:'',
            amount:0,
            createdAt:0
            
        }
    });
});


