


function WhoAmI({name,surname,link}){
    return (
        <div className="">
            <h1>My name is {name()}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    )
}


function App(){
    return (
        <div className="App">
            <WhoAmI name= {() => {return 'John'}} surname='Smith' link ='facebook.com'/>
            <WhoAmI name= {() => {return 'Alex'}} surname='Shepard' link ='twitter.com'/>
           
        </div>
    )
}

export default App;