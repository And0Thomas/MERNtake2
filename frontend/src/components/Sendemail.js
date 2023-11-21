

const nodemailer = require('nodemailer')


module.exports =
{
    addToMailList: function (req, res)
    {
        let { newUser } = req.body

        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: 'CARDINALCCVerify@gmail.com',
                pass: 'fegs wvih dqtd ccev'
            }

        });

        message = "You just logged in!"

        // setup email data with unicode symbols
        let mailOptions = {
            from: "Cardinal Coffee Co" , // sender address
            to: newUser, // list of receivers
            subject: "Welcome Letter", // Subject line
            text: message // plain text body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return
                console.log(error);
            }
            res.json(info);

        });


    }

}