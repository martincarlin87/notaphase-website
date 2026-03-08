import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import React, {useState} from "react";

export default function ContactUs() {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [buttonText, setButtonText] = useState("Send");
    const [buttonEnabled, setButtonEnabled] = useState(true);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const {executeRecaptcha} = useGoogleReCaptcha();

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if (!executeRecaptcha) {
            console.log("Execute recaptcha not yet available");
            return;
        }

        executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
            handleSubmit(gReCaptchaToken);
        });
    };

    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (fullname.length <= 0) { tempErrors["fullname"] = true; isValid = false; }
        if (email.length <= 0) { tempErrors["email"] = true; isValid = false; }
        if (message.length <= 0) { tempErrors["message"] = true; isValid = false; }

        setErrors({...tempErrors});
        return isValid;
    };

    const handleSubmit = async (gReCaptchaToken) => {
        const isValidForm = handleValidation();

        if (isValidForm) {
            setButtonText("Sending");
            setButtonEnabled(false);

            const res = await fetch("/api/contact", {
                body: JSON.stringify({
                    email: email,
                    fullname: fullname,
                    message: message,
                    gRecaptchaToken: gReCaptchaToken,
                }),
                headers: {"Content-Type": "application/json"},
                method: "POST",
            });

            const data = await res.json();

            if (!res.ok || data.status === 'failure') {
                console.log(error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Send");
                setButtonEnabled(true);
                return;
            }

            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Sent!");
        }
    };

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className="px-6 py-8 max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="section-heading">Contact us</h2>
                    <p className="mt-4 text-gray-400">
                        Please use the form below to get in touch. You can also email us directly at{' '}
                        <span className="text-white">hello@notaphase.band</span>.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmitForm}
                    className="rounded-xl flex flex-col px-8 py-8"
                    style={{background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)'}}
                >
                    <h1 className="cormorant text-2xl font-semibold text-white">Send a message</h1>

                    <label htmlFor="fullname" className="text-gray-400 text-xs font-medium mt-7 mb-2 uppercase tracking-widest">
                        Name <span className="text-pink">*</span>
                    </label>
                    <input
                        type="text"
                        name="fullname"
                        value={fullname}
                        disabled={!buttonEnabled}
                        onChange={(e) => setFullname(e.target.value)}
                        className="input-dark"
                        placeholder="Your name"
                    />
                    {errors?.fullname && (
                        <p className="text-red-400 text-sm mt-2">Name cannot be empty.</p>
                    )}

                    <label htmlFor="email" className="text-gray-400 text-xs font-medium mt-5 mb-2 uppercase tracking-widest">
                        E-mail <span className="text-pink">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        disabled={!buttonEnabled}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-dark"
                        placeholder="your@email.com"
                    />
                    {errors?.email && (
                        <p className="text-red-400 text-sm mt-2">Email cannot be empty.</p>
                    )}

                    <label htmlFor="message" className="text-gray-400 text-xs font-medium mt-5 mb-2 uppercase tracking-widest">
                        Message <span className="text-pink">*</span>
                    </label>
                    <textarea
                        name="message"
                        value={message}
                        disabled={!buttonEnabled}
                        onChange={(e) => setMessage(e.target.value)}
                        className="input-dark"
                        placeholder="Tell us about your event..."
                        rows="5"
                    />
                    {errors?.message && (
                        <p className="text-red-400 text-sm mt-2">Message cannot be empty.</p>
                    )}

                    <div className="flex justify-center mt-8">
                        <button type="submit" disabled={!buttonEnabled} className="btn-brand px-16">
                            {buttonText}
                        </button>
                    </div>

                    <div className="mt-5 text-center">
                        {showSuccessMessage && (
                            <p className="text-green-400 font-medium text-sm">
                                Thank you! Your message has been sent. We aim to reply within 24 hours.
                            </p>
                        )}
                        {showFailureMessage && (
                            <p className="text-red-400 text-sm">
                                Oops! Something went wrong, please try again.
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </Layout>
    );
}
