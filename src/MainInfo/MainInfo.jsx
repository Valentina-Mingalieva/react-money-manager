import React from 'react';
import PropTypes from 'prop-types';

const MainInfo = ({title, options, openActivePage, activePage}) => {    
    return (
        <section>
            <h2>{title}</h2>
            <p>EUR</p>
            <button onClick={() => openActivePage(activePage)} type='button'>Add</button>
            <ul>
                {options.map((el) => (
                    <li key={el.name}>
                        <span>{el.period}</span>
                        <span>{el.sum}</span>
                    </li>
                ))}
            </ul>
        </section>   
    )
}

MainInfo.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            period: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            sum: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]).isRequired,
            openActivePage: PropTypes.func.isRequired,
            activePage: PropTypes.string.isRequired,
        })
    )
}

export default MainInfo;