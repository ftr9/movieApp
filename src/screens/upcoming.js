import { Component } from "react"
import DominaceHead from "../components/dominaceHead"
import { tmdb } from '../api/tmdbMovie';
import ChangePage from "../components/changePage";
import MovieCard from "../components/movieCard";
import VideoIframe from "../components/videoIframe";



class Upcoming extends Component {
    state = {
        results: [],
        currentPage: 1,
        videoId: null
    }

    updateVideoId = async (id) => {
        let Id;
        if (id !== null) {
            const datas = await tmdb.get(`${id}/videos`);
            Id = datas.data.results[0].key
        } else {
            Id = null
        }
        this.setState({
            videoId: Id
        })
    }

    fetchPopularMovie = async (currentPage) => {
        const popularMovies = await tmdb.get("/upcoming", {
            params: {
                language: 'en-US',
                page: currentPage
            }
        })

        console.log(popularMovies.data)
        this.setState({
            results: popularMovies.data.results
        })
    }

    upPage = () => {
        let page = { ...this.state };
        page.currentPage++;
        this.fetchPopularMovie(page.currentPage);
        this.setState({
            currentPage: page.currentPage
        })


    }
    downPage = () => {
        let page = { ...this.state };
        page.currentPage--;
        if (page.currentPage <= 0) {
            return 0;
        }
        this.fetchPopularMovie(page.currentPage);
        this.setState({
            currentPage: page.currentPage
        })
    }

    componentDidMount() {
        this.fetchPopularMovie(2);
    }



    render() {
        return (
            <>
                <VideoIframe videoId={this.state.videoId} updateVideoId={this.updateVideoId} />
                <div className={"activeTab"}>

                    {
                        this.state.results.length === 0 ? "" : <DominaceHead imageUrl={`https://image.tmdb.org/t/p/w185${this.state.results[0].poster_path}`} updateVideoId={this.updateVideoId} title={this.state.results[0].original_title} description={this.state.results[0].overview} movieId={this.state.results[0].id} />
                    }

                    <ChangePage addPage={this.upPage} subPage={this.downPage} page={this.state.currentPage} />

                    <div className={"movie__list"}>
                        {
                            this.state.results.map((movie, index) => {

                                return <MovieCard updateVideoId={this.updateVideoId} title={`${movie.original_title}`} imageUrl={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} movieId={movie.id} key={movie.id} />

                            })
                        }
                    </div>
                </div>

            </>
        );


    }
}

export default Upcoming
