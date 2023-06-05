
import { Component } from 'react';


class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            position: '',
        }
    }

    nextYear = () => {
        console.log('+++');
        this.setState({
            years: this.state.years + 1,
        })
    }

    commitInputChanges = (e,color) => {
    //теряется контекст если функция не стрелочная,а например метод
    //можно решить с помощью bind
    //или анонимная стрелочная функция в онклике () =>{this.nextYear()}
     console.log(color);

    this.setState({
            position: e.target.value
        })
    }

    render() {
        const { name, surname, link } = this.props;
        const { position, years } = this.state;
        return (
            <div className="">
                <button onClick={this.nextYear}>+++</button>
                <h1>My name is {name}, surname - {surname},
                    age -  {years},
                    position - {position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Job title</span>
                    <input type="text" onChange={(e)=>{this.commitInputChanges(e,'some color')}} />
                </form>
            </div>
        )
    }
}


function App() {
    return (
        <div className="App">
            <WhoAmI name='John' surname='Smith' link='facebook.com' />
            <WhoAmI name='Alex' surname='Shepard' link='twitter.com' />

        </div>
    )
}

export default App;