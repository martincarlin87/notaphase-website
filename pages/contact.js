import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";

import React, {useState} from "react";

export default function ContactUs() {

    // States for contact form fields
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Form validation state
    const [errors, setErrors] = useState({});

    // Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");
    const [buttonEnabled, setButtonEnabled] = useState(true);

    // Setting success or failure messages states
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
            console.log(gReCaptchaToken, "response Google reCaptcha server");
            handleSubmit(gReCaptchaToken);
        });
    };

    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (fullname.length <= 0) {
            tempErrors["fullname"] = true;
            isValid = false;
        }

        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }

        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

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
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const {error} = await res.json();

            if (error) {
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

        console.log(fullname, email, message);
    };

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
                                Contact us
                            </h2>

                            <p className="mt-4 mb-4 text-gray-400">
                                Please use the form below to get in touch. You can also email us directly at <span
                                className="text-white">hello@notaphase.band</span>!
                            </p>
                        </div>

                        <div className="mt-20 flex justify-center">
                            <form
                                onSubmit={handleSubmitForm}
                                className="rounded-lg shadow-xl flex flex-col px-8 py-8 w-full lg:w-3/5 bg-gray-900"
                            >

                                <h1 className="text-2xl font-bold text-gray-50">Send a message</h1>

                                <label
                                    htmlFor="fullname"
                                    className="text-gray-50 text-left font-light mt-8 mb-2"
                                >
                                    Name <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type="text"
                                    name="fullname"
                                    value={fullname}
                                    disabled={!buttonEnabled}
                                    onChange={(e) => {
                                        setFullname(e.target.value);
                                    }}
                                   className="bg-white py-3 pl-4 focus:outline-none rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                                />

                                {errors?.fullname && (
                                    <p className="text-red-500 text-left mt-2">Name cannot be empty.</p>
                                )}

                                <label
                                    htmlFor="email"
                                    className="text-gray-50 text-left font-light mt-4 mb-2"
                                >
                                    E-mail <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    disabled={!buttonEnabled}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    className="bg-white py-3 pl-4 focus:outline-none rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                                />

                                {errors?.email && (
                                    <p className="text-red-500 text-left mt-2">Email cannot be empty.</p>
                                )}

                                <label
                                    htmlFor="message"
                                    className="text-gray-50 text-left font-light mt-4 mb-2"
                                >
                                    Message <span className="text-red-500">*</span>
                                </label>

                                <textarea
                                    name="message"
                                    value={message}
                                    disabled={!buttonEnabled}
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                    }}
                                    className="bg-white py-3 pl-4 focus:outline-none rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                                    rows="5"></textarea>

                                {errors?.message && (
                                    <p className="text-red-500 text-left mt-2">Message body cannot be empty.</p>
                                )}

                                <div className="flex flex-row items-center justify-center">
                                    <button type="submit" disabled={!buttonEnabled} className="relative mt-8 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium rounded-md group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-800">
                                        <span
                                            className="relative px-10 py-2 transition-all ease-in duration-75 bg-navy rounded-md group-hover:bg-opacity-0 group-hover:bg-transparent">
                                            {buttonText}
                                        </span>
                                    </button>
                                </div>

                                <div className="text-left mt-4">

                                    {showSuccessMessage && (
                                        <p className="text-green-500 font-semibold text-center text-sm my-2">
                                            Thank you! Your message has been sent. We aim to reply within 24 hours
                                        </p>
                                    )}

                                    {showFailureMessage && (
                                        <p className="text-red-500 text-center">
                                            Oops! Something went wrong, please try again.
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
