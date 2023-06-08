
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
                { name: 'Ivan C.', salary: 750, increase: true, rise: true, id: 1 },
                { name: 'John C.', salary: 800, increase: false, rise: false, id: 2 },
                { name: 'Alex M.', salary: 700, increase: false, rise: false, id: 3 },
                { name: 'Anna C.', salary: 900, increase: true, rise: false, id: 4 },

            ]
        }

        this.maxId = 4;
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

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise:false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

onToggleProp = (id,prop) => {
// this.setState(({data}) =>{
//     const index = data.findIndex(elem => elem.id === id);
//     const old = data[index];
//     const newItem = {...old,increase: !old.increase};
//     const newArr = [...data.slice(0,index),newItem,...data.slice(index+1)];

//     return {
//         data:newArr
//     }
// })


this.setState(({data}) => ({
    data:data.map(item =>{
        if(item.id === id){
            return {...item,[prop]: !item[prop]}
        }
        return item;
    })
}))
}





    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo employees ={employees} increased={increased} />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />

                </div>
                <EmployeesList data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp ={this.onToggleProp}
                    />
                <EmployeesAddForm onAdd={this.addItem}
                />
            </div>
        )
    }
}

export default App;
