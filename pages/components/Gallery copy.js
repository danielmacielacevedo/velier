import { useState, useEffect } from 'react';

export default function Gallery() {
    const [feed, setFeed] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = process.env.INSTAGRAM_VELIERHEALTH_KEY;
                const url = `https://graph.instagram.com/5994256340679428?fields=id,username,followers_count&access_token=${accessToken}`;
                const response = await fetch(url);
                const data = await response.json();
                setFeed(data);

                console.log(data)

            } catch (error) {
                console.error('Error fetching Instagram feed:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="GalleryContainer">
                {feed && feed.username && (
                    <h1>Galeria {feed.username}</h1>
                )}
            </div>
        </>
    );
}
