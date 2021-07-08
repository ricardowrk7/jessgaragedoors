import React, {useState, useEffect} from 'react';
import Contact from '../Sections/Presentation/ContactCard';
import CircularProgress from '@material-ui/core/CircularProgress';

const ContactForm = () => {
    const [focus, setFocus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false)
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        let data = {
            name, 
            number, 
            email, 
            message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            console.log('Response received')
            console.log(res);
            if (res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true);
              setName('');
              setEmail('');
              setMessage('');
              setNumber('');
              setLoading(false);
          } else {
              setLoading(false);
          }
        })
    }

    const handleFocus = (e) => {
        setFocus(e.target.name);
    };

    const handleNameChange = (e) => {
        const { name, value } = e.target;
        setName(value);
    };

    const handleNumberChange = (e) => {
        const { name, value } = e.target;
        setNumber(value);
    };

    const handleEmailChange = (e) => {
        const { name, value } = e.target;
        setEmail(value);
    };

    const handleMessageChange = (e) => {
        const { name, value } = e.target;
        setMessage(value);
    };

    return (
        <div className="outer-contact-box">
            <p className="contact-title">Request A service</p>
            <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-row-1">
                <div className="input-top">
                    <input 
                        type="name" 
                        placeholder="Name" 
                        className="input-class"
                        value={name}
                        label="name"
                        onFocus={handleFocus}
                        onChange={handleNameChange}
                        required
                        id="name"
                        />
                </div>
                <div className="input-top">
                    <input 
                        type="phone" 
                        placeholder="Phone" 
                        className="input-class" 
                        value={number}
                        label="phone"
                        onFocus={handleFocus}
                        onChange={handleNumberChange}
                        required
                        />
                </div>
            </div>
            <div className="input-email-contact">
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="input-class" 
                    value={email}
                    label="email"
                    onFocus={handleFocus}
                    onChange={handleEmailChange}
                    required
                    />
            </div>
            <div className="input-email-contact-3">
                <textarea 
                    placeholder="Message" 
                    className="input-class" 
                    value={message}
                    label="message"
                    onFocus={handleFocus}
                    onChange={handleMessageChange}
                    required
                    />
            </div>
            <button type="submit" className="contact-info-2">{loading ? <CircularProgress size={18}/> : 'send'}</button>
            </form>
        </div>
    )
}

export default ContactForm;