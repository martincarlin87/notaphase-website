import styles from './layout.module.css';
import Script from "next/script";
import Head from "next/head";
import Link from 'next/link';
import {NavLink} from './navlink';
import {useState} from "react";

export const siteTitle = 'Not A Phase';

export default function Layout({ children }) {

    const [isOpen, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!isOpen);
        console.log(isOpen);
    };

    return <div className={styles.container}>
        <Head>
            <meta
                name="charset"
                content="utf-8"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1-8"
            />
            <meta
                name="description"
                content="Not A Phase, Wedding & Events Band from Central Scotland"
            />
            <meta
                name="keywords"
                content="Wedding Band Scotland, Wedding Band Glasgow, Wedding Band Edinburgh"
            />
            <meta
                name="author"
                content="Not A Phase"
            />
            <meta
                name="manifest"
                content="/manifest.json"
            />

            <Script
                src="https://www.googletagmanager.com/gtag/js?id=AW-1004839080"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    
                    gtag('config', 'AW-1004839080');
                    
                    <!-- Event snippet for Website traffic conversion page -->
                    gtag('event', 'conversion', {'send_to': 'AW-1004839080/Ro_aCKuwsoAYEKjBkt8D'});
                `}
            </Script>

            <Script id="service-worker" strategy="afterInteractive">
                {`
                if ('serviceWorker' in navigator) { // check compatability
                    navigator.serviceWorker.register('sw.js') // register
                      .then((res) => {
                        console.log('Service worker registered!'); // success
                    })
                  .catch((err) => {
                    console.log('Registration failed!'); // failure
                  })
                }
            `}
            </Script>
        </Head>

        <div id="fb-root"></div>

        <div id="fb-customer-chat" className="fb-customerchat"></div>

        <Script id="messenger" strategy="afterInteractive">
            {`
                    var chatbox = document.getElementById('fb-customer-chat');
                    chatbox.setAttribute("page_id", "105063625285491");
                    chatbox.setAttribute("attribution", "biz_inbox");
                    
                    window.fbAsyncInit = function() {
                        FB.init({
                            xfbml            : true,
                            version          : 'v15.0'
                        });
                    };

                    (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = 'https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js';
                    fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));
                `}
        </Script>

        <nav className="bg-gray-900 border-gray-200 px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <NavLink href="/" className="flex items-center">
                    <svg className="mr-3 h-6 sm:h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 207.62 89.04"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="fill-teal" d="M58.29,30.05a1,1,0,0,1-.23.81,1.25,1.25,0,0,1-.76.49.55.55,0,0,1-.27-.06,1.35,1.35,0,0,1-.29-.13q-2.06-1.34-4.3-2.59T47.88,26c-1.54-.88-3.07-1.83-4.59-2.83a38.63,38.63,0,0,1-4.39-3.38,42.31,42.31,0,0,0,2.35,4.47q1.38,2.34,2.64,4.38t2.19,3.51a8.24,8.24,0,0,1,1,1.9,1,1,0,0,1-.24.88,1.31,1.31,0,0,1-.75.46c-.16,0-.38-.11-.63-.42a14,14,0,0,1-.9-1.22Q44,33,43.5,32c-.36-.64-.72-1.27-1.07-1.91l-1-1.79c-.3-.55-.54-1-.73-1.38L39,23.81c-.38-.67-.77-1.36-1.16-2.07l-1.09-2c-.33-.62-.6-1.17-.82-1.65a4.77,4.77,0,0,1-.37-1,3.71,3.71,0,0,1-.06-.95c0-.34.15-.52.37-.56a.38.38,0,0,1,.31,0,.24.24,0,0,0,.19.08l.45-.3c.14,0,.42.1.83.38s.89.65,1.45,1.12,1.17,1,1.82,1.59,1.32,1.17,2,1.73,1.29,1.08,1.89,1.57A11.79,11.79,0,0,0,46.32,23c.71.44,1.42.85,2.12,1.23l2.13,1.16,2.27,1.27c.8.45,1.69,1,2.66,1.56a.35.35,0,0,0,.21,0c.06,0,.07-.08,0-.22l-.09-.5a11.89,11.89,0,0,0-.72-2c-.42-1-.95-2.08-1.6-3.34s-1.39-2.62-2.2-4-1.65-2.81-2.51-4.12A40,40,0,0,0,46,10.38a13.8,13.8,0,0,0-2.4-2.33,1.6,1.6,0,0,1-.49-.68,4.34,4.34,0,0,1-.26-.81,1,1,0,0,1,.28-.72,1.14,1.14,0,0,1,.65-.49c.34-.06.77.2,1.31.79a20.38,20.38,0,0,1,1.81,2.34c.67,1,1.37,2.08,2.11,3.31s1.46,2.49,2.18,3.75c.86,1.5,1.67,3,2.45,4.46s1.48,2.84,2.11,4.13S57,26.57,57.38,27.6A21.6,21.6,0,0,1,58.29,30.05Z"/><path className="fill-teal" d="M66,21a6.3,6.3,0,0,1,.08,1.78,5.38,5.38,0,0,1-.39,1.58,3.36,3.36,0,0,1-.79,1.16,2.41,2.41,0,0,1-1.16.58,2.54,2.54,0,0,1-1.95-.32,4.65,4.65,0,0,1-1.3-1.35,6.88,6.88,0,0,1-.79-1.67,10.79,10.79,0,0,1-.35-1.33,6.7,6.7,0,0,1-.09-1.72,7.78,7.78,0,0,1,.3-1.84,5.49,5.49,0,0,1,.64-1.49,1.41,1.41,0,0,1,.93-.73,1.15,1.15,0,0,1,.41,0,3.11,3.11,0,0,1,.61.14,2,2,0,0,1,.59.32,1.19,1.19,0,0,1,.42.52,2,2,0,0,1,1,.16,1.15,1.15,0,0,1,.58.36,10.71,10.71,0,0,1,.84,2.07C65.76,20,65.9,20.54,66,21Zm-2-.4a8.64,8.64,0,0,0-.37-1.28,5.3,5.3,0,0,0-.76-1.3.4.4,0,0,1-.2.08.54.54,0,0,1-.28,0,.6.6,0,0,0-.19,0,1.13,1.13,0,0,0-.74.41,1.68,1.68,0,0,0-.3.79,3.49,3.49,0,0,0,0,1c0,.34.08.66.13,1s.14.64.24,1a4.77,4.77,0,0,0,.38,1,2.87,2.87,0,0,0,.55.77.78.78,0,0,0,.73.23.85.85,0,0,0,.63-.57,4,4,0,0,0,.26-1.1,7.79,7.79,0,0,0,0-1.18C64.05,21.05,64,20.78,64,20.61Z"/><path className="fill-teal" d="M79.32,8.37A6.37,6.37,0,0,1,78,9.88c-.59.53-1.19,1-1.79,1.48s-1.12.85-1.58,1.17-.67.54-.65.62a4.14,4.14,0,0,0,.3.72L75,15.26l.81,1.67c.28.58.52,1.09.72,1.54l.41,1,.48,1.28c.15.43.28.82.4,1.15s.19.52.19.54a4.51,4.51,0,0,1,0,1.33c-.06.47-.24.73-.54.79a.64.64,0,0,1-.5-.13,2.8,2.8,0,0,1-.46-.4,3.35,3.35,0,0,1-.35-.47,2,2,0,0,1-.15-.36A1.47,1.47,0,0,1,76,23c0-.12,0-.24,0-.38a15.57,15.57,0,0,0-.68-2.23q-.17-.45-.6-1.35l-.86-1.85c-.34-.74-.72-1.54-1.14-2.41a1.91,1.91,0,0,0-.32-.54,2.76,2.76,0,0,0-.9.54c-.41.32-.88.71-1.39,1.16s-1.06.94-1.62,1.46-1.08,1-1.57,1.45L65.61,20a2.65,2.65,0,0,1-.66.49,1.1,1.1,0,0,1-.94-.21,1.22,1.22,0,0,1-.49-.76c0-.17.15-.45.55-.86s.89-.86,1.5-1.37,1.26-1.06,2-1.62,1.37-1.07,2-1.53l2.17-1.61c-.49-1.22-.91-2.32-1.26-3.28s-.58-1.59-.84-2.29-.4-1.07-.41-1.12A1.27,1.27,0,0,1,69.26,5a.68.68,0,0,1,.47-.37q.45-.09.69.51C71,6.55,71.54,7.82,72,8.93a28.29,28.29,0,0,0,1.3,2.67,8.36,8.36,0,0,0,1.19-.71l1.75-1.21,1.65-1.15A5,5,0,0,1,78.78,8a.3.3,0,0,1,.34.11A1.37,1.37,0,0,0,79.32,8.37Z"/><path className="fill-teal" d="M107.81,27.9a1.5,1.5,0,0,1,.1.3l0,.23a.8.8,0,0,1-.08.62,1.24,1.24,0,0,1-.7.3,1,1,0,0,1-.69,0,4.73,4.73,0,0,1-.91-1.16c-.4-.64-.85-1.4-1.33-2.28s-1-1.84-1.46-2.86-.94-2-1.34-2.92a10.15,10.15,0,0,1-1.16.67l-1.53.74c-.61.25-1.25.53-1.91.83,0,1.23,0,2.28,0,3.15s.06,1.57.06,2.13a3.86,3.86,0,0,1-.14,1.27.8.8,0,0,1-.66.53.72.72,0,0,1-.65-.26A2.09,2.09,0,0,1,95,28.08a14.67,14.67,0,0,1-.12-1.78c0-.94-.08-2-.12-3.13s-.09-2.3-.13-3.43-.1-2-.16-2.68a14.59,14.59,0,0,1,0-1.66c0-.78,0-1.58,0-2.39s0-1.56.09-2.23a6.76,6.76,0,0,1,.13-1.14A11.26,11.26,0,0,0,95,6.33c-.08-1.1-.17-2.11-.27-3a11.14,11.14,0,0,1-.06-2.26,1,1,0,0,1,.88-1c.14,0,.3.06.5.25a6.52,6.52,0,0,1,.58.71,6.1,6.1,0,0,1,.5.83,5.87,5.87,0,0,1,.29.65c.06.16.16.49.29,1s.28,1,.44,1.61.3,1.16.45,1.72.26,1,.35,1.28c.25.9.57,1.9,1,3s.78,2.12,1.16,3.08.71,1.76,1,2.41.48,1,.56.94a1.51,1.51,0,0,0,.42-.16,1.78,1.78,0,0,1,.5-.18.3.3,0,0,1,.4.27.83.83,0,0,1-.07.57,3.29,3.29,0,0,1-.28.44l-.28.35a.39.39,0,0,0-.09.32,9.88,9.88,0,0,0,.7,1.62L105.05,23c.1.21.29.56.58,1l.91,1.53c.31.53.6,1,.86,1.47A4.54,4.54,0,0,1,107.81,27.9Zm-11-7.76a5,5,0,0,0,.88-.31c.43-.18.86-.39,1.3-.61s.83-.45,1.17-.65.49-.35.47-.44a3.29,3.29,0,0,0-.26-.61c-.16-.33-.36-.75-.58-1.26s-.47-1.11-.74-1.77-.53-1.38-.79-2.13c-.15-.49-.34-1.15-.59-2s-.48-1.68-.72-2.5-.54-1.84-.88-3c0,.84,0,1.5,0,2s0,1,0,1.42,0,.69,0,.74l.22,1.16q0,.09,0,.75c0,.44,0,1,0,1.66s0,1.4,0,2.18,0,1.54,0,2.25.05,1.34.08,1.89.07.93.1,1.12S96.74,20.16,96.83,20.14Z"/><path className="fill-teal" d="M53.75,89q2.14-9.7,4.09-19c.53-2.58,1.08-5.32,1.66-8.19s1.12-5.7,1.65-8.48,1-5.46,1.51-8,.88-5,1.22-7.12c1.39-.43,2.75-.8,4.1-1.11s2.72-.59,4.13-.83a24.93,24.93,0,0,1,4-.36,12.2,12.2,0,0,1,5.42,1.08,9.64,9.64,0,0,1,3.56,2.91A11.48,11.48,0,0,1,87,44.12a23.07,23.07,0,0,1,.58,5.25,21,21,0,0,1-1.48,7.76,23.43,23.43,0,0,1-4,6.65,19.72,19.72,0,0,1-5.68,4.63,13.8,13.8,0,0,1-6.65,1.73h-.79q-.57,2.44-1.07,5.32c-.34,1.91-.63,3.69-.87,5.31q-.49,2.88-.93,5.75ZM72.22,53.53q-.8,4.24-1.73,9.06a6.16,6.16,0,0,0,2.41-1.33,11.21,11.21,0,0,0,2.33-2.73A15,15,0,0,0,77,54.61a16.67,16.67,0,0,0,.65-4.67,6,6,0,0,0-1.19-4,3.44,3.44,0,0,0-2.62-1.37C73.27,47.71,72.74,50.71,72.22,53.53Z"/><path className="fill-teal" d="M81.77,89q2-10.07,3.89-19.62c.47-2.73,1-5.57,1.5-8.52s1-5.86,1.48-8.73.88-5.67,1.29-8.37.73-5.17,1-7.37q1.65.07,3.06.18l2.76.18c.91.05,1.84.08,2.77.11s2,0,3.06,0q-1.23,5.12-2.41,10.21t-2.2,10.28l7.12-.8q1-5.1,1.8-9.88c.52-3.18,1.22-6.48,2.08-9.88,1.1-.19,2.32-.35,3.67-.47l3.73-.32c1.15-.09,2.52-.22,4.1-.36-.67,2.16-1.31,4.52-1.9,7.08s-1.19,5.22-1.77,8-1.12,5.54-1.65,8.37-1,5.51-1.43,8q-1.59,9.12-3,18.69L99.53,87.17q.93-4.32,1.65-8.41c.48-2.3,1-4.69,1.47-7.19s.9-4.62,1.19-6.39l-7,.64c-.34,1.83-.73,3.93-1.19,6.33s-.87,4.67-1.26,6.83q-.78,3.87-1.58,7.76Z"/><path className="fill-teal" d="M135.39,88.1l-3.88.65c.19-1.58.38-3.14.57-4.67.15-1.34.28-2.68.4-4s.23-2.49.32-3.45h-6.25L123.67,87c-1,.15-2.3.3-3.73.47l-4,.47-4.53.57q2.88-9.55,5.68-18.83,1.16-3.87,2.41-8.12c.84-2.82,1.68-5.64,2.52-8.44s1.64-5.5,2.4-8.09,1.44-5,2-7.11q4.88-.36,10-.87c3.38-.33,6.67-.79,9.88-1.36-.14,1.53-.3,3.44-.46,5.71s-.33,4.76-.47,7.44-.29,5.49-.43,8.41-.29,5.8-.44,8.62q-.36,9.93-.79,21.06c-1.43.24-2.87.43-4.31.58Zm-7.12-18.68c.2,0,.54,0,1,0l1.58-.07,1.54-.07a6.42,6.42,0,0,0,1-.11c0-.29,0-.78.11-1.47s.14-1.49.21-2.38.16-1.85.25-2.91.2-2.08.29-3.09q.28-3.66.72-7.9l.43-6.25-1.08.07-1.65,6.18Z"/><path className="fill-teal" d="M174.31,78.44a17.7,17.7,0,0,1-4.17,5.64A18.55,18.55,0,0,1,164,87.74,22.08,22.08,0,0,1,156.3,89a12.09,12.09,0,0,1-5.75-1.55A18.28,18.28,0,0,1,145,82.57l5.32-10.42a7.75,7.75,0,0,0,1.51,1.9,11.2,11.2,0,0,0,2.26,1.69,16.86,16.86,0,0,0,2.52,1.19,6.57,6.57,0,0,0,2.26.47,6.2,6.2,0,0,0,1.8-.29,5.9,5.9,0,0,0,1.72-.86,4.79,4.79,0,0,0,1.26-1.33,3.31,3.31,0,0,0,.47-1.76A5.16,5.16,0,0,0,163,70a15.86,15.86,0,0,0-2.76-2.81c-1.11-.88-2.3-1.78-3.6-2.69a33.34,33.34,0,0,1-3.56-2.88,16.21,16.21,0,0,1-2.76-3.37A7.79,7.79,0,0,1,149.19,54a12,12,0,0,1,2.23-7A21.69,21.69,0,0,1,157,41.5a29.26,29.26,0,0,1,7.29-3.7,23,23,0,0,1,7.48-1.37,14,14,0,0,1,3.66.47,7.53,7.53,0,0,1,5,4.13,9.19,9.19,0,0,1,.75,3.95,11.38,11.38,0,0,1-.18,2c-.12.68-.23,1.39-.32,2.16l-10.42,3c.09-.38.18-.77.25-1.15a6.4,6.4,0,0,0,.11-1.15,5.16,5.16,0,0,0-.76-3.13,2.4,2.4,0,0,0-2-1,3.27,3.27,0,0,0-1.4.43,9.44,9.44,0,0,0-1.65,1.12,6.25,6.25,0,0,0-1.4,1.62,3.79,3.79,0,0,0-.58,2,4.31,4.31,0,0,0,1,2.87A12.44,12.44,0,0,0,166.22,56c1,.67,2,1.35,3.13,2.05a13.7,13.7,0,0,1,3.12,2.69,13.84,13.84,0,0,1,2.41,4.13,17.39,17.39,0,0,1,1,6.29A16.86,16.86,0,0,1,174.31,78.44Z"/><path className="fill-teal" d="M175.49,89l9.42-51.1,22.71-1.94c-.34,1-.63,2.13-.87,3.23-.24.91-.46,1.86-.68,2.84s-.39,1.86-.54,2.62c-.48.05-1.16.09-2.05.11l-2.83.07c-1,0-2,0-3.06,0H194.9L192.38,57.7q2.24-.14,4.17-.21c1-.05,2.13-.07,3.23-.07s1.92,0,2.45-.08c-.2,1.35-.37,2.66-.54,4s-.37,2.61-.61,4c-.48,0-1.26.08-2.34.11s-2.17.06-3.27.1l-4.1.15-2.44,13.22,10.49-1.65-.71,8.19Z"/><path className="fill-pink" d="M30.3,39.87l22.11,8.78L45.07,86.84H16.57L36,81.6l8.08-2.18L36,77.35,9.56,70.63,41.5,63.69l3-.65L42.9,60.4,30.3,39.87M25,35.39,41,61.55,0,70.46l35.46,9L0,89H46.89l8-41.76L25,35.39Z"/></g></g></svg>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white invisible">Not A Phase</span>
                </NavLink>
                <button onClick={toggleOpen}  data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${isOpen ? '' : 'hidden'}`}>
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink
                                href="/"
                                exact
                                className="block py-2 pr-4 pl-3 text-gray-400 rounded md:bg-transparent md:p-0"
                                >Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                                href="/videos"
                                className="block py-2 pr-4 pl-3 text-gray-400 rounded md:bg-transparent md:p-0">
                                Videos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                href="/repertoire"
                                className="block py-2 pr-4 pl-3 text-gray-400 rounded md:bg-transparent md:p-0">
                                Repertoire
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                href="/faqs"
                                className="block py-2 pr-4 pl-3 text-gray-400 rounded md:bg-transparent md:p-0">
                                FAQs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                href="/contact"
                                className="block py-2 pr-4 pl-3 text-gray-400 rounded md:bg-transparent md:p-0">
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <main className="container mx-auto">
            <h1 className="invisible">Not A Phase</h1>

            {children}

        </main>

    </div>;
}