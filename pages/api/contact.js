

export default function (req, res) {
    const Keys = require('../../config/keys');
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'jessgaragedoorspataskala@gmail.com',
          pass: 'Myfirst1'  //Keys.googlePassword,
        },
        secure: true,
      })

      const mailData = {
        from: 'jessgaragedoorspataskala@gmail.com',
        to: 'jessgaragedoorspataskala@gmail.com',
        subject: `Message From ${req.body.name}`,
        message: req.body.message,
        html: `<div>
            <p>Name: ${req.body.name}</p>
            <p>email: ${req.body.email}</p>
            <p>Phone: ${req.body.number}</p>
            <p>Message: ${req.body.message}</p>
            </div>`
       }

       transporter.sendMail(mailData, function (err, info) {
        if(err) {
          console.log('Error')
          console.log(err)
        } else {
          console.log('success')
          console.log(info)
        }
      })
      
      res.status(200).send('success');
    }
