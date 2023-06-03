

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import './app.css';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


function App() {
    const data = [
        { name: 'John C.', salary: 800, increase:false },
        { name: 'Alex M.', salary: 700, increase:false },
        { name: 'Anna C.', salary: 900, increase:true },
    ];

    return (
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />

            </div>
            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    )
}

export default App;
