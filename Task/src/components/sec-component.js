function Test(props){
    return(
        <div className="main-seccomp">

            <div className="header">
                <img
                    src={props.img}
                    alt={props.alt}
                />
                <span>{props.work}</span>
                <p>{props.pos}</p>
            </div>
            <div className="content">
                <h5>{props.name}</h5>
            </div>
        </div>
    );
}
export default Test;