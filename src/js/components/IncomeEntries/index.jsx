import IncomeEntries from './IncomeEntries';
import { connect } from'react-redux';

function mapStoreToProps(store) {
    return {
        description: store.income.description,
        amount: store.income.amount,
        lineItems: store.income.lineItems
    }
}

export default connect(mapStoreToProps)(IncomeEntries);