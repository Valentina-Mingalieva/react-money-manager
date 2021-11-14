import s from './StatButtons.module.css';

const StatButtons = () => {
    return (
    <div>
        <button
            type='button'
            className={s.button}>All costs
        </button>
        <button
            type='button'
            className={s.button}>All incoms
        </button>
    </div>
    )     
}

export default StatButtons;