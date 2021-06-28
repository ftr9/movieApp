
const VideoIframe = (props) => {
    const { videoId, updateVideoId } = props;

    function autoplayCheck() {
        return videoId !== null ? 1 : 0;
    }
    return (
        <div className="videPlayIframe" style={{ display: `${videoId ? "block" : "none"}` }}>
            <button style={{ fontSize: '2rem', backgroundColor: 'red', color: 'white', padding: '1rem 1.5rem', border: 'none' }} onClick={() => {
                updateVideoId(null);
            }}>Close</button>
            <iframe title="intro" src={`http://www.youtube.com/embed/${videoId}?autoplay=${autoplayCheck()}&mute=`} width="960" height="447" frameBorder="0" allowFullScreen></iframe>
        </div>
    )
}

export default VideoIframe
