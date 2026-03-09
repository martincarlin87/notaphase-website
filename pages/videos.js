import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';

export default function Videos() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className="px-6 py-8 max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="section-heading">Videos</h2>
                </div>

                <div className="flex justify-center">
                    <div className="w-full lg:w-4/5">
                        <h3 className="mb-4 text-teal-brand cormorant text-xl font-semibold">2025 Showreel</h3>
                        <div className="embed-wrapper">
                            <div className="webembed-wrapper">
                                <iframe
                                    className="video rounded-md"
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/OTFYITxqpJQ"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="flex justify-center">
                    <div className="w-full lg:w-4/5">
                        <h3 className="mb-4 text-teal-brand cormorant text-xl font-semibold">Wedding Show Medley No 1</h3>
                        <div className="embed-wrapper">
                            <div className="webembed-wrapper">
                                <iframe
                                    className="video rounded-md"
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/ncYzzw1Sdas"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
