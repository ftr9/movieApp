import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';


let Headstyle = {
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    padding: '1rem 5rem'
}

const DominaceHead = (props) => {

    const { title, description, movieId, imageUrl, updateVideoId } = props;

    return (
        <div style={Object.assign({ backgroundImage: `linear-gradient(to left bottom,rgba(0, 0, 0, 0.650),rgba(0, 0, 0, 0.650)),url("${imageUrl}")` }, Headstyle)} className={"movie__head"}>

            <h1>{title}</h1>
            <p>
                {description}
            </p>

            <div className="movie__head__buttons">
                <button className={"playButton"} onClick={() => {
                    updateVideoId(movieId);
                }}><PlayArrowIcon /> Play</button>
                <Link to={`/details/${movieId}`}><button className="ui inverted teal button detailsButton"> <InfoIcon /> Info</button></Link>
            </div>

        </div>
    )
}

export default DominaceHead
