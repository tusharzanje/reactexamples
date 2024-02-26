const Person = (props) => {
    return (
        <div>
            <p onClick={props.newprops}>I am {props.name} and I am {props.age} years old !</p>
            <input type="text" onChange={props.personchange} defaultValue={props.name}/>
            <p>{props.children}</p>
        </div>
    )
}

export default Person;