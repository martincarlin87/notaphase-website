import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function handleRequest(req, res) {
    // validate recaptcha
    await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.gRecaptchaToken}`,
    })
        .then((reCaptchaRes) => reCaptchaRes.json())
        .then((reCaptchaRes) => {

            console.log(
                reCaptchaRes,
                "Response from Google reCaptcha verification API"
            );

            if (reCaptchaRes?.score > 0.5) {

                sendEmail(req);

                res.status(200).json({
                    status: "success",
                    message: "Enquiry submitted successfully",
                });
            } else {
                res.status(200).json({
                    status: "failure",
                    message: "Google ReCaptcha Failure",
                });
            }
        });
}

async function sendEmail(req) {

    try {
        await sendgrid.send({
            replyTo: req.body.email,
            to: "hello@notaphase.band",
            from: "hello@notaphase.band",
            subject: '📩 New Website Contact Form Submission',
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html lang="en">
                <head>
                    <meta charset="utf-8">
              
                    <title>Website Contact Form Submission</title>
                    <meta name="description" content="The HTML5 Herald">
                    <meta name="author" content="SitePoint">
                    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
                </head>
                <body>
                    <div class="container" style="margin-left: 20px;margin-right: 20px;">
                        <h3>New website contact form submission from ${req.body.fullname}, their email is: ✉️ ${req.body.email}.</h3>
                        <div style="font-size: 16px;">
                            <p style="font-weight: bold;">Message:</p>
                            <p>${req.body.message}</p>
                        </div>
                    </div>
                </body>
              </html>
            `,
        });
    } catch (error) {
        return error.statusCode || 500;
    }

    return 200;
}

export default handleRequest;
