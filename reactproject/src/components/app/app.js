
import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Ivan C.', salary: 750, increase: true, id: 1 },
                { name: 'John C.', salary: 800, increase: false, id: 2 },
                { name: 'Alex M.', salary: 700, increase: false, id: 3 },
                { name: 'Anna C.', salary: 900, increase: true, id: 4 },

            ]
        }
    }

    deleteItem = (id) => {
        //1     
        //const index = data.findIndex(elem => elem.id === id);      
        // const before = data.slice(0,index);
        // const after = data.slice(index+1);
        // const newArr =[...before,...after];
        // return{
        //     data:newArr
        // }

        //2
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }


    render() {
        return (
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />

                </div>
                <EmployeesList data={this.state.data}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm />
            </div>
        )
    }
}

export default App;
