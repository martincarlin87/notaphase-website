import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';

export default function Repertoire() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className="px-6 py-8 max-w-4xl mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="section-heading">Repertoire</h2>
                    <p className="mt-4 text-gray-400">
                        Our repertoire currently consists of over 100 songs and is constantly growing and evolving.
                    </p>
                    <p className="mt-3 text-gray-400">
                        If you have any suggestions or requests, please let us know via Messenger or email us at{' '}
                        <span className="text-white">hello@notaphase.band</span>.
                    </p>
                    <p className="mt-3 text-gray-400">
                        Want to add our Spotify playlist to your profile? Access it{' '}
                        <a
                            href="https://open.spotify.com/playlist/6KFdKJ2jXb6o06vZi3L6rQ"
                            target="_blank"
                            className="text-white underline hover:text-gray-300 transition-colors"
                        >
                            here
                        </a>.
                    </p>
                </div>

                <div className="flex justify-center">
                    <iframe
                        className="rounded-lg w-full lg:w-4/5"
                        src="https://open.spotify.com/embed/playlist/6KFdKJ2jXb6o06vZi3L6rQ?utm_source=generator&theme=0"
                        width="100%"
                        height="380"
                        frameBorder="0"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </div>
            </div>
        </Layout>
    );
}
