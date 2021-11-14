import PropTypes from 'prop-types';
import MainInfo from '../../MainInfo/MainInfo';
import { costInfoOptions, incomsInfoOptions, balanceInfoOptions } from '../../Assets/Options/mainInfoOption.json';
import StatButtons from '../StatButtons/Statbuttons';

const MainPage = ({openActivePage}) => {
    return (
        <>
            <h1>Журнал расходов</h1>
            <MainInfo 
                openActivePage={openActivePage} 
                options={costInfoOptions} title='Costs'
                activePage='costs' />
            <MainInfo 
                openActivePage={openActivePage} 
                options={incomsInfoOptions} title='Incoms'
                activePage='incoms'/>
            <MainInfo 
                openActivePage={openActivePage} 
                options={balanceInfoOptions} title='Balance'
                activePage='balance'/>
            <StatButtons />
        </>
    )  
}

MainPage.propTypes = {
    openActivePage: PropTypes.func.isRequired,
}

export default MainPage;