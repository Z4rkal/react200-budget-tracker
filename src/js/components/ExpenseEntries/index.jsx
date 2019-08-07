import ExpenseEntries from './ExpenseEntries';
import { connect } from'react-redux';

function mapStoreToProps(store) {
    return {
        description: store.expense.description,
        amount: store.expense.amount,
        lineItems: store.expense.lineItems
    }
}

export default connect(mapStoreToProps)(ExpenseEntries);