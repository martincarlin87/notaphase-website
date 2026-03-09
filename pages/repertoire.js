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
                        We are a band that specialises in alternative music from the 90's and 00's, however we know parties need something for everyone. You'll see two playlists below, one for the{' '}
                        <a
                            href="https://open.spotify.com/playlist/5Tdp0QDL7l8N7FIFDI5hus"
                            target="_blank"
                            className="text-white underline hover:text-gray-300 transition-colors"
                        >
                            Emos
                        </a> and one for the {' '}
                        <a
                            href="https://open.spotify.com/playlist/430St2R2bSa6qZ9us0VPqW"
                            target="_blank"
                            className="text-white underline hover:text-gray-300 transition-colors"
                        >
                            Normies
                        </a>. We can mix and match to suit your needs.
                    </p>
                    <p className="mt-3 text-gray-400">
                        If you have any suggestions or requests, please let us know via Messenger or email us at{' '}
                        <span className="text-white"><a href="mailto:hello@notaphase.band">hello@notaphase.band</a></span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    <iframe
                        className="rounded-lg w-full"
                        src="https://open.spotify.com/embed/playlist/5Tdp0QDL7l8N7FIFDI5hus?utm_source=generator&theme=0"
                        width="100%"
                        height="380"
                        frameBorder="0"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                    <iframe
                        className="rounded-lg w-full"
                        src="https://open.spotify.com/embed/playlist/430St2R2bSa6qZ9us0VPqW?utm_source=generator&theme=0"
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
