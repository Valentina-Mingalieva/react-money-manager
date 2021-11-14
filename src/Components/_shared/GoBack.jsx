import PropTypes from 'prop-types';

const GoBack = ({ handleGoBack, title }) => {
    const callbackOnClick = (e) => handleGoBack();
    return (
        <header>
            <button
                onClick={callbackOnClick}
                type='button'>GoBack
            </button>
            <h1>{title}</h1>
        </header>
    );
}

GoBack.propTypes = {
    handleGoBack: PropTypes.func.isRequired,
    title: PropTypes.string,
}

export default GoBack;