import moment from 'moment';
import {
    setStartDate,
    setEndDate,
    sortByAmount,
    setTextFilter,
    sortByDate
} from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    });
});

test('should sort by Date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    });
});

test('should set the text action object', ()=>{
    const action=setTextFilter('Rent');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'Rent'

    });
});

test('should set the default text action object', ()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''

    });
});