const Person = (props) => {
    let vote = props.age >= 18 ? "please vote!" : "you must be 18";
    let hobbies = props.hobbies.map(h => <li>{h}</li>);

    return (
    <div>
        <p>Learn some information about this person.</p>
        <ul>
            <li>Name: {props.name.slice(0, 6)}</li>
            <li>Age: {props.age}</li>
            <li>Hobbies:</li>
                <ul>{hobbies}</ul>
        </ul>
        <h3>{vote}</h3>
    </div>
    )
}