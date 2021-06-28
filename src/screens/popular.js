import { Component } from "react"

import { tmdb } from "../api/tmdbMovie"
import DominaceHead from "../components/dominaceHead"
import MovieCard from "../components/movieCard"
import ChangePage from "../components/changePage"

import VideoIframe from "../components/videoIframe";

class Popular extends Component {
    state = {
        results: [],
        currentPage: 1,
        videoId: null
    }

    updateVideoId = async (id) => {

        let Id;
        if (id !== null) {
            const datas = await tmdb.get(`${id}/videos`);
            Id = datas.data.results.length === 0 ? null : datas.data.results[0].key;
            if (Id === null) {
                alert("Can't play video at the moment");
            }
        } else {
            Id = null
        }

        this.setState({
            videoId: Id
        })
    }

    fetchPopularMovie = async (currentPage) => {
        const popularMovies = await tmdb.get("/popular", {
            params: {
                language: 'en-US',
                page: currentPage
            }
        })
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
        this.fetchPopularMovie(4);
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

                                return <MovieCard title={`${movie.original_title}`} updateVideoId={this.updateVideoId} imageUrl={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} movieId={movie.id} key={movie.id} />

                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default Popular
