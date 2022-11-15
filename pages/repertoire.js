import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';

export default function Repertoire() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className="px-4 py-8 text-center">
                <div className="col-12 mx-auto">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-4 sm-justify-content-center">

                        <div className="lg:mx-auto lg:max-w-2xl lg:text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Repertoire
                            </h2>
                            <p className="mt-4 mb-4 text-gray-400">
                                Our repertoire currently consists of over 100 songs and is constantly growing and evolving.
                            </p>
                            <p className="mt-4 mb-4 text-gray-400">
                                If you have any suggestions or requests, then please let us know via Messenger or get us on <span className="text-white">hello@notaphase.band</span>!
                            </p>
                            <p className="mt-4 mb-4 text-gray-400">
                                If you want to add our Spotify playlist to your own profile, you can access it <a href="https://open.spotify.com/playlist/6KFdKJ2jXb6o06vZi3L6rQ" target="_blank" className="text-white underline">here</a>.
                            </p>
                        </div>
                        <div className="mt-20 flex justify-center">
                            <iframe className="rounded-md w-full lg:w-3/5"
                                src="https://open.spotify.com/embed/playlist/6KFdKJ2jXb6o06vZi3L6rQ?utm_source=generator&theme=0"
                                width="100%" height="380" frameBorder="0" allowFullScreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
