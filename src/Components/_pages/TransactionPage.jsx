import PropTypes from 'prop-types';
import GoBack from '../_shared/GoBack';
import LabelInput from '../_shared/LabelInput';

const TransactionPage = ({ transactionType,  closeActivePage }) => {
    const title = transactionType === 'incoms' ? 'incoms' : 'costs';
    return (
        <>
            <GoBack handleGoBack={closeActivePage} title={title} />
            <main>
                <section>
                    <form>
                        <LabelInput
                            title={'Day'}
                            type='date'
                            name='day' />
                        <LabelInput
                            title={'Time'}
                            type='time'
                            name='time' />
                        <LabelInput
                            title={'Category'}
                            type='button'
                            name='category'/>
                        <LabelInput
                            title={'Sum'}
                            name='sum'
                            placeholder='Fill in the sum'/>
                        <LabelInput
                            title={'Currency'}
                            type='button'
                            name='currency' />
                        <LabelInput
                            name='comment'
                            placeholder='Please comment'/>
                    </form>
                </section>
            </main>
        </>
    )
}

TransactionPage.propTypes = {
    transactionType: PropTypes.string.isRequired,
    closeActivePage: PropTypes.func.isRequired,
}

export default TransactionPage;