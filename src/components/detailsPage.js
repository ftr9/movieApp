import React, { Component } from 'react';
import { tmdb } from '../api/tmdbMovie';
import Skeleton from '@material-ui/lab/Skeleton';


let detail__image__style = {
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'

}
/*
const { id } = useParams();
    const {Detail,setnewDetail} = useState({});*/

class DetailsPage extends Component {

    state = {
        details: {}
    }

    componentDidMount() {
        tmdb.get(`/${this.props.match.params.id}`).then((result) => {
            this.setState({
                details: result.data
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (

            this.state.details.poster_path ?

                <div className={"activeTab detailPage"} style={Object.assign({ backgroundImage: `linear-gradient(to left bottom,rgba(0, 0, 0, 0.850),rgba(0, 0, 0, 0.850)),url(https://image.tmdb.org/t/p/w185${this.state.details.poster_path})` }, detail__image__style)}>

                    <div className={"detailsPage__image"}>
                        <img src={`https://image.tmdb.org/t/p/w185${this.state.details.poster_path}`} alt={"mothing"}></img>
                    </div>

                    <div className={"detailPage__details"}>
                        <h1>{this.state.details.original_title} ({new Date(this.state.details.release_date).getFullYear()})</h1>

                        <div className={"genre"}>
                            <button className="ui inverted primary button">{this.state.details.status}</button>
                            &nbsp;&nbsp; &nbsp; &nbsp; {this.state.details.genres.map(el => el.name).join(' , ')}  .  {this.state.details.runtime} minutes
                        </div>

                        <div className="Stats">

                            <div className="ui labeled button satistic" tabIndex="0">
                                <div className="ui red button stat">
                                    <i className="heart icon"></i> Vote count
                                </div>
                                <p className="ui basic red left pointing label">
                                    {this.state.details.vote_count}
                                </p>
                            </div>
                            <div className="ui labeled button satistic" tabIndex="0">
                                <div className="ui yellow button stat">
                                    <i className="thumbs up icon"></i> Rating
                                </div>
                                <p className="ui basic red left pointing label">
                                    {this.state.details.vote_average}
                                </p>
                            </div>

                            <div className="ui labeled button satistic" tabIndex="0">
                                <div className="ui orange button stat">
                                    <i className="shopping cart icon"></i> Budget
                                </div>
                                <p className="ui basic red left pointing label">
                                    {this.state.details.budget}
                                </p>
                            </div>

                            <div className="ui labeled button satistic" tabIndex="0">
                                <div className="ui purple button stat">
                                    <i className="hand peace icon"></i> Popularity
                                </div>
                                <p className="ui basic red left pointing label">
                                    {this.state.details.popularity}
                                </p>
                            </div>

                        </div>

                        <p className="tag">{this.state.details.tagline}</p>

                        <h2 className="overview">Overview</h2>
                        <p className="details">
                            {this.state.details.overview}
                        </p>

                        <button className="ui inverted black " style={{ fontSize: '2rem !important', padding: '1rem 2rem' }}><i className="play icon"></i> Play</button>
                    </div>
                </div>

                :
                <div className={"activeTab loadingdetail"}>
                    <Skeleton variant="text" height={800} width={250} />
                    <div class="detail__load">
                        <Skeleton variant="text" height={50} width={500} />
                        <Skeleton variant='rect' width={100} height={20} />

                        <div className="loadingBoxes" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Skeleton variant='rect' width={100} height={50} />
                            <Skeleton variant='rect' width={100} height={50} />
                            <Skeleton variant='rect' width={100} height={50} />
                            <Skeleton variant='rect' width={100} height={50} />
                            <Skeleton variant='rect' width={100} height={50} />
                        </div>
                    </div>



                </div>

        );
    }
}

export default DetailsPage
