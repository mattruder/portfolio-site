export default function MusicPage() {
    return (
        <div className="music-page">
            <h1>Music</h1>
            <div className="music-services-container">
                <h2>Music Services</h2>
                <ul>
                    <li>Film Scores</li>
                    <li>Live Performances</li>
                    <li>Tours</li>
                    <li>Jingles</li>
                    <li>Session Recording</li>
                </ul>
            </div>
            <div className="music-videos-container">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/0pRJI1di-uQ" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/EaQJX3xL01g" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/pDmcf0Xu6Cs" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
            </div>
            <div className="music-page-spotify">
                <iframe 
                    
                    src="https://open.spotify.com/embed/playlist/5lwyFw7PRQKYmYgKRwQiV7?utm_source=generator&theme=0" 
                    width="100%" 
                    height="380" 
                    allowFullScreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>
            </div>
            
        </div>
    )
}