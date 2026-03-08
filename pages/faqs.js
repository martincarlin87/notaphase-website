import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';

export default function Faqs() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className="px-6 py-8 max-w-5xl mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="section-heading">Frequently asked questions</h2>
                    <p className="mt-4 text-gray-400">
                        These are some of the most commonly asked questions we receive.
                    </p>
                    <p className="mt-3 text-gray-400">
                        Can&apos;t find the answer you&apos;re looking for? Use the live chat to speak to us via Messenger or feel free to email us at <span className="text-white">hello@notaphase.band</span>.
                    </p>
                </div>

                <dl className="grid lg:grid-cols-2 gap-5">
                    <div className="faq-item">
                        <dt className="faq-question">How much time do you need for set up &amp; sound check?</dt>
                        <dd className="faq-answer">
                            We take around 1 hour (from access to the room) to set up including soundcheck to make sure sound levels are perfect for the event.
                        </dd>
                    </div>

                    <div className="faq-item">
                        <dt className="faq-question">What are your standard performance times?</dt>
                        <dd className="faq-answer">
                            A standard performance would be 8pm - 12am with a break when the evening buffet is served. For those who wish to keep the party going later, we can offer a DJ set until 1am (contact for additional cost).
                        </dd>
                    </div>

                    <div className="faq-item">
                        <dt className="faq-question">Is there any flexibility on the standard timings?</dt>
                        <dd className="faq-answer">
                            Timings are of course flexible, we are happy to start earlier if required. There would however be an extra cost involved for finishing later than 12am, or extending the band&apos;s playing time beyond the standard 4 hours.
                        </dd>
                    </div>

                    <div className="faq-item">
                        <dt className="faq-question">How long is your break? Can you play background music during this time?</dt>
                        <dd className="faq-answer">
                            <p className="mb-3">We have generally found that allowing 30-40 minutes for a break whilst the buffet is served works best, giving guests (and the band) time to rest and refuel.</p>
                            <p>During the break you are welcome to provide your own playlist, we can set up a custom one through our equipment, or leave it to us — we have several playlists ready for this purpose.</p>
                        </dd>
                    </div>

                    <div className="faq-item">
                        <dt className="faq-question">Can I pick the songs you&apos;ll play on the night?</dt>
                        <dd className="faq-answer">
                            The band will arrive with a setlist in mind, however our experience shows this will change as the night progresses as we read the room. We are happy to discuss favourites in advance, and note any definite no-nos.
                        </dd>
                    </div>

                    <div className="faq-item">
                        <dt className="faq-question">Will you learn our first dance?</dt>
                        <dd className="faq-answer">
                            <p className="mb-3">We are very happy to learn your first dance at no extra charge. Some couples also like a father/daughter dance — we can learn that too, within our standard fee.</p>
                            <p>We will be in touch with plenty of time before the event to discuss these options.</p>
                        </dd>
                    </div>

                    <div className="faq-item">
                        <dt className="faq-question">Can you take requests on the night?</dt>
                        <dd className="faq-answer">
                            We are always happy to listen to requests and will try to help where we can. We have a very large repertoire, but don&apos;t be disappointed if we don&apos;t know a particular song.
                        </dd>
                    </div>

                    <div className="faq-item">
                        <dt className="faq-question">My venue has a 1am licence — can you extend until then?</dt>
                        <dd className="faq-answer">
                            Yes, we can offer a DJ service between 12am and 1am to keep the party going, though there is an additional cost for this option.
                        </dd>
                    </div>

                    <div className="faq-item">
                        <dt className="faq-question">Do you offer any other add-on options?</dt>
                        <dd className="faq-answer">
                            Aside from the 1am extension, most extras are included in the quoted price. If you have any specific requests not covered here, don&apos;t be afraid to ask — we always try our best to accommodate.
                        </dd>
                    </div>

                    <div className="faq-item">
                        <dt className="faq-question">Is PA &amp; lighting included in your quote?</dt>
                        <dd className="faq-answer">
                            The band provide good quality PA and lighting, fully included in our quote.
                        </dd>
                    </div>

                    <div className="faq-item">
                        <dt className="faq-question">What do clients love most about your performances?</dt>
                        <dd className="faq-answer">
                            Feedback tells us clients love our high energy performances, and the fact that as a five piece we actually play live — no backing tracks.
                        </dd>
                    </div>

                    <div className="faq-item">
                        <dt className="faq-question">Which artists are you most influenced by?</dt>
                        <dd className="faq-answer">
                            We play a complete range from the 60s to the present day. Van Morrison gets people going early, we&apos;ll cheese it up with Backstreet Boys, blow the roof off with Blink 182, and bring it up to date with a bit of Lizzo.
                        </dd>
                    </div>

                    <div className="faq-item">
                        <dt className="faq-question">Can you provide a ceilidh set?</dt>
                        <dd className="faq-answer">
                            <p className="mb-3">Who&apos;s up for a Gay Gordons? If a ceilidh is requested we&apos;ll live play a set of the standards and call the dances for your guests, all included in the standard cost.</p>
                            <p>
                                Dances included: Gay Gordon&apos;s, Dashing White Sergeant, Strip The Willow, Canadian Barn Dance, Virginia Reel.
                            </p>
                        </dd>
                    </div>

                    <div className="faq-item">
                        <dt className="faq-question">How much does it cost to book the band?</dt>
                        <dd className="faq-answer">
                            <p className="mb-3">The base price is <span className="text-white font-medium">£1295</span>, based on standard times of 8pm–12am within the Central Belt.</p>
                            <p>Get an <span className="text-white font-medium">instant</span> availability and price check at <a href="https://www.coastentertainments.co.uk/band/not-a-phase" target="_blank" className="text-white underline hover:text-gray-300 transition-colors">Coast Entertainments</a>.</p>
                        </dd>
                    </div>
                </dl>
            </div>
        </Layout>
    );
}
