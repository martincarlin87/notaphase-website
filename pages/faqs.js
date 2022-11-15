import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';

export default function Faqs() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className="px-4 py-8 text-center">

                <div className="lg:mx-auto lg:max-w-2xl lg:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 mb-4 text-gray-400">
                        These are some of the most commonly asked questions we receive.
                    </p>
                    <p className="mt-4 mb-4 text-gray-400">
                        Can't find the answer you're looking for? Use the live chat to speak to us via Messenger or feel free to email us at <span className="text-white">hello@notaphase.band</span>.
                    </p>
                </div>
                <div className="mt-20">
                    <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
                        <div>
                            <dt className="font-semibold text-white">
                                How much time to you need for set up & sound check?
                            </dt>
                            <dd className="mt-3 text-gray-400">
                                We take around 1 hour (from access to the room) to set up including soundcheck to make sure sound levels are perfect for the event.
                            </dd>
                        </div>

                        <div>
                            <dt className="font-semibold text-white">
                                What are your standard performance times?
                            </dt>
                            <dd className="mt-3 text-gray-400">
                                A standard performance would be 8pm - 12am with a break when the evening buffet is served.  For those who wish to keep the party going later, we can offer a DJ set until 1am (contact for additional cost).
                            </dd>
                        </div>

                        <div>
                            <dt className="font-semibold text-white">
                                I'm not sure what my timings are going to be yet, is there any flexibility on the standard timings?
                            </dt>
                            <dd className="mt-3 text-gray-400">
                                Timings are of course flexible, we are happy to start earlier if required. There would however be an extra cost involved for finishing later than 12pm, or extending the bands playing time beyond the standard 4 hours.
                            </dd>
                        </div>

                        <div>
                            <dt className="font-semibold text-white">
                                How long do you take for your break? Are you able to play background music during this time?
                            </dt>
                            <dd className="mt-3 text-gray-400">
                                <p className="mb-4">We have generally found that allowing 30-40 minutes for a break whilst the buffet is served works best, this allows the guests (and the band) time to rest and refuel ready to hit the dancefloor for the second set.</p>

                                <p>During this break you are welcome to provide your own device with a pre setup playlist, we can setup a custom playlist for you and play through our own equipment, or if you are happy you can leave it to us, we have a number of playlists we have setup for this purpose.</p>
                            </dd>
                        </div>

                        <div>
                            <dt className="font-semibold text-white">
                                Can I pick the songs that you'll play on the night?
                            </dt>
                            <dd className="mt-3 text-gray-400">
                                The band will arrive with a setlist in mind, however our experience shows this will change as the night progresses as we read the room and can see which songs are getting the guests dancing, and which aren't working so well. We are happy to discuss in advance of the day if you have any particular favourites you would like us to play, and if there are any definite no-no's.
                            </dd>
                        </div>

                        <div>
                            <dt className="font-semibold text-white">
                                Will you learn our first dance if it's a song that you don't already know?
                            </dt>
                            <dd className="mt-3 text-gray-400">
                                <p className="mb-4">We are very happy to learn your first dance, and there is no extra charge for this service.  Some couples also like to follow this with a father/daughter dance, if this is something you would like we can also learn this for you, again within our standard fee.</p>

                                <p>We will contact you with plenty of time between booking the band and the event itself to discuss these options.</p>
                            </dd>
                        </div>

                        <div>
                            <dt className="font-semibold text-white">
                                Can you take any requests on the night?
                            </dt>
                            <dd className="mt-3 text-gray-400">
                                We are always happy to listen to requests from guests on the night, and will always try to help where we can. We have a very large repertoire of songs, but don't be disappointed if we don't know a song you are asking for.
                            </dd>
                        </div>

                        <div>
                            <dt className="font-semibold text-white">
                                My venue has a 1am license, do you offer an extension to keep the night going until then?
                            </dt>
                            <dd className="mt-3 text-gray-400">
                                As mentioned above, we are able to offer a DJ service between 12am and 1am to keep the party going, although there would be an additional cost for this option.
                            </dd>
                        </div>

                        <div>
                            <dt className="font-semibold text-white">
                                Do you offer any other add-on options?
                            </dt>
                            <dd className="mt-3 text-gray-400">
                                Aside from the 1am extension, most other extras would be included in the bands quoted price. If you have any specific requests not covered here, don't be afraid to ask, we always try our best to accommodate.
                            </dd>
                        </div>

                        <div>
                            <dt className="font-semibold text-white">
                                Is all of the equipment (e.g. PA & lighting) included in your quote?
                            </dt>
                            <dd className="mt-3 text-gray-400">
                                The band provide a good quality PA and lighting, which is fully included in our quote.
                            </dd>
                        </div>

                        <div>
                            <dt className="font-semibold text-white">
                                What do you think your clients love most about your performances?
                            </dt>
                            <dd className="mt-3 text-gray-400">
                                Feedback from clients tell us they love our high energy performances, plus love the fact as a five piece we do actually play live as opposed to running backing tracks.
                            </dd>
                        </div>

                        <div>
                            <dt className="font-semibold text-white">
                                Which artists are you most influenced by?
                            </dt>
                            <dd className="mt-3 text-gray-400">
                                As a band we will play a complete range of music from 60's to present day, wedding classics to contemporary. Van Morrison gets people going early, we'll cheese it up with Backstreet Boys, we'll  blow the roof off with Blink 182 and bring it up to date with a bit of Lizzo.
                            </dd>
                        </div>

                        <div>
                            <dt className="font-semibold text-white">
                                Can you provide a ceilidh set? If so, could you give us more info about this - how long does it last, what instruments do you play, can you call the dances for our guests?
                            </dt>
                            <dd className="mt-3 text-gray-400">
                                <p className="mb-4">Who's up for a Gay Gordons? If Ceilidh is asked for we'll live play a set of the standards and call the dances for your guests, all included in the standard cost.</p>

                                <p>
                                    Dances included would be:
                                    <br /><br />
                                    Gay Gordon’s<br />
                                    Dashing White Sergeant<br />
                                    Strip The Willow<br />
                                    Canadian Barn Dance<br />
                                    Virginia Reel<br />
                                </p>
                            </dd>
                        </div>

                        <div>
                            <dt className="font-semibold text-white">
                                How much does it cost to book the band?
                            </dt>
                            <dd className="mt-3 text-gray-400">
                                <p className="mb-4">The answer is it depends. For full transparency, the base price is <span className="text-white">£1295</span>.</p>
                                <p className="mb-4">This is based on the assumption of standard times consisting of 8pm - 12am and a location somewhere within the Central Belt.</p>
                                <p className="mb-4">The good news is that it is easy to get an <span className="text-white">instant</span> availability and price check by heading over to <a href="https://www.coastentertainments.co.uk/band/not-a-phase" target="_blank" className="text-white underline">Coast Entertainments</a>.</p>

                            </dd>
                        </div>
                    </dl>

                </div>

            </div>

        </Layout>
    );
}
