import React, { Component } from 'react';

function calculateSum(lineItems) {
    return lineItems.reduce((acc, lineItem) => acc + lineItem.amount, 0);
}

function formatCurrency(amount) {
    if (amount >= 0) {
        const dollars = Math.floor(amount);
        const cents = Math.floor((amount - dollars) * 100).toString().padEnd(2, '0');
        return `$${dollars.toLocaleString()}.${cents}`;
    }

    const dollars = Math.ceil(amount);
    const cents = Math.floor((amount - dollars) * 100 * -1).toString().padEnd(2, '0');
    return `-$${(dollars * -1).toLocaleString()}.${cents}`;
}

class Summary extends Component {

    render() {
        const { incomeItems, expenseItems } = this.props;

        const incomeTotal = Math.round(calculateSum(incomeItems) * 100) / 100;
        const expenseTotal = Math.round(calculateSum(expenseItems) * 100) / 100;
        const difference = Math.round((incomeTotal - expenseTotal) * 100) / 100;
        const inTheRed = difference < 0;

        return (
            <div className={`card border-${inTheRed ? `warning` : `info`} mb-3`}>
                <div className={`card-header text-${inTheRed ? `dark` : `white`} bg-${inTheRed ? `warning` : `info`}`}>Summary</div>
                <div className='card-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6 text-center'>
                                <h6 className='h6 strong'>Total Income</h6>
                                <p>{formatCurrency(incomeTotal)}</p>
                            </div>
                            <div className='col-6 text-center'>
                                <h6 className='h6 strong'>Total Expense</h6>
                                <p>{formatCurrency(expenseTotal)}</p>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-6 text-center'>
                                <h6 className='h6 strong'>Left after spending</h6>
                                <p>{formatCurrency(difference)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;