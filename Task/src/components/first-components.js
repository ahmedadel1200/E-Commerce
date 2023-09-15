function Card(props){

    return(
        <div className="main">
            <div className="head">
                <img
                    src={props.img}
                    alt={props.alt}
                />
                <div className="info">
                    <h3>Emily Dougrer</h3>
                    <p>Developer</p>
                </div>
            </div>
            <div className="text">
                <p>
                    Hi there.
                    <span><i className="fa-solid fa-hand-holding-droplet"></i></span>
                    We use Boards to share initial goals and ideas.
                </p>
            </div>
            <div className="footer">
                <p>Type your message...</p>
                <span>Send</span>
            </div>

        </div>
    );
}
export default Card;