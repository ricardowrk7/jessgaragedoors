import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.EMAIL_API_KEY);

export default async (req, res) => {
  const { email, name, number, message } = req.body
  const msg = {
    to: 'jessgaragedoorspataskala@gmail.com',
    from: 'jessgaragedoorspataskala@gmail.com',
    subject: `Message From ${name}`,
    name,
    text: `
    Name: ${name}
    email: ${email}
    Phone: ${number}
    
    Message: ${message}
    `,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` })
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' })
  }
}
