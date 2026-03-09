import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import YouTubeEmbed from '../components/YouTubeEmbed';

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
            <h3 className="mb-4 text-teal-brand cormorant text-xl font-semibold">
              2026 Showreel
            </h3>
            <YouTubeEmbed 
                  videoId="OTFYITxqpJQ"
                  title="2026 Showreel"
                  thumbnail="/images/logo.png"
            />
          </div>
        </div>

        <br />
        <br />

        <div className="flex justify-center">
          <div className="w-full lg:w-4/5">
            <h3 className="mb-4 text-teal-brand cormorant text-xl font-semibold">
              Wedding Show Medley No 1
            </h3>
            <YouTubeEmbed 
                  videoId="ncYzzw1Sdas"
                  title="Wedding Show Medley No 1"
                  thumbnail="/images/logo.png"
            />            
          </div>
        </div>
      </div>
    </Layout>
  );
}