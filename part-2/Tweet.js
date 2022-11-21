const Tweet = (props) => {
    return (
    <div>
        <h3>{props.username}- {props.name}</h3>
        <h4>{props.date}</h4>
        <p>{props.message}</p>
    </div>
    )
}