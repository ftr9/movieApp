import { Link } from 'react-router-dom';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoIcon from '@material-ui/icons/Info';


const MovieCard = (props) => {

    const { title, imageUrl, movieId, updateVideoId } = props;


    return (
        <div className={"movie__card"}>
            <div className={"movie__card__image"}>
                <img src={imageUrl} alt={title}></img>
            </div>
            <h3>{title}</h3>
            <div className="movie__head__buttons  movie__head__buttons--diff">
                <button className={"playButton__min"} onClick={(e) => {
                    updateVideoId(movieId);
                }}><PlayArrowIcon /> Play</button>
                <Link to={`/details/${movieId}`}><button className="ui inverted primary button detailsButton__min"><InfoIcon /> info</button></Link>
            </div>

        </div >
    )
}

export default MovieCard


