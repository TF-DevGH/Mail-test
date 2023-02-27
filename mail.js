// Importe la bibliothèque Nodemailer
const nodemailer = require('nodemailer');

// Crée un transporteur SMTP pour envoyer l'e-mail
const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    auth: {
        user: 'user@example.com',
        pass: 'password'
    }
});

// Adresse e-mail de l'utilisateur
const userEmail = 'thomasfantoupro@gmail.com';

// Adresse e-mail de l'expéditeur
const fromEmail = 'MyBot2266@gmail.com';

// Corps de l'e-mail
const emailBody = 'Bonjour, \n\nLe prix est OK.';

// Envoie un e-mail prédéfini si la condition PrixOk est vraie
if (PrixOk) {
    // Paramètres de l'e-mail à envoyer
    const mailOptions = {
        from: fromEmail,
        to: userEmail,
        subject: 'Confirmation de prix',
        text: emailBody
    };

    // Envoie l'e-mail à l'utilisateur
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('E-mail envoyé: ' + info.response);
        }
    });
}



// Récupère le bouton Modifier PrixOk
var modifierButton = document.getElementById("modifier-prix-ok");

// Initialise la condition PrixOk à false
var PrixOk = false;

// Ajoute un écouteur d'événement au bouton Modifier PrixOk
modifierButton.addEventListener("click", function () {
    // Inverse la valeur de PrixOk
    PrixOk = !PrixOk;
});