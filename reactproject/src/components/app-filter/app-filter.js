
import './app-filter.css';

const AppFilter = (props) => {
    const buttonData = [
        { name: 'all', label: 'All employees', },
        { name: 'rise', label: 'For rise', },
        { name: 'moreThen1000', label: 'Salary over 1000$', },
    ];


    const buttons = buttonData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
                className={`btn ${clazz}`}
                type="button "
                key={name}
                onClick={() => props.onFilterSelect(name)}
            >
                {label}
            </button>
        )
    })
    return (
        <div className="btn-group">

            {buttons}
        </div>
    )
}

export default AppFilter;