import '../styles/global.css';
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function App({ Component, pageProps }) {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY}
        >
            <Component {...pageProps} />
        </GoogleReCaptchaProvider>
    );
}
