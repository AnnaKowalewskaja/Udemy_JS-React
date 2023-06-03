

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import './app.css';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


function App() {
    const data = [
        { name: 'Ivan C.', salary: 750, increase:true, id:1},
        { name: 'John C.', salary: 800, increase:false, id:2},
        { name: 'Alex M.', salary: 700, increase:false, id:3},
        { name: 'Anna C.', salary: 900, increase:true, id:4},
      
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
