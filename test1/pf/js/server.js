const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public')); // Assuming your HTML file is in the 'public' directory

app.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Configure the transporter for Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'assyacontact41@gmail.com',
            pass: 'contactmail',
        },
    });

    // Configure the email options
    const mailOptions = {
        from: email,
        to: 'assyacontact41@gmail.com',
        subject: subject,
        text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.json({ success: false });
        } else {
            console.log('Email sent: ' + info.response);
            res.json({ success: true });
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'contactassya41@gmail.com',
        pass: 'contactmail',
    },
});
