import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';

export default function Videos() {
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
                                Videos
                            </h2>
                        </div>
                        <div className="mt-20 flex justify-center">
                            <div className="w-full lg:w-3/5">

                                <h3 className="mb-4 text-gray-400 text-3xl">
                                    2022 Showreel
                                </h3>

                                <div className="embed-wrapper">
                                    <div className="webembed-wrapper">
                                        <iframe className="video rounded-md" width="100%" height="100%" src="https://www.youtube.com/embed/GQ8CIfJMfYY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
