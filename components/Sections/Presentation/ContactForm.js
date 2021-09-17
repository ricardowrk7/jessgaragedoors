import React, {useState, useEffect} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Notification from '../../Notifications/Notifications';

const Form = () => {
    const [focus, setFocus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false)
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(null);
    const [notifications, setNotifications] = useState('');
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
              setNotifications('Message Success');
              setTimeout(() => {  setNotifications(''); }, 4000);
          } else {
              setLoading(false);
              setNotifications('Please try again!');
              setTimeout(() => {  setNotifications(''); }, 4000);
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

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        setDate(value);
    };


    return (
        <React.Fragment>
            <div className="form-container">
                <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-field">
                <label style={{ visibility: 'hidden', position: 'absolute' }} name="name">Name</label>
                <input 
                    placeholder="Name" 
                    type="name" 
                    className="text-box-input"
                    value={name}
                    onFocus={handleFocus}
                    onChange={handleNameChange}
                    required
                    />
                </div>
                <div className="form-field">
                <label style={{ visibility: 'hidden', position: 'absolute' }} name="phone">Phone</label>
                    <input 
                        placeholder="Phone" 
                        type="phone" 
                        className="text-box-input"
                        value={number}
                        onFocus={handleFocus}
                        onChange={handleNumberChange}
                        required
                        />
                </div>
                <div className="form-field">
                <label style={{ visibility: 'hidden', position: 'absolute' }} name="email">Email</label>
                    <input 
                        placeholder="E-mail" 
                        type="email" 
                        className="text-box-input"
                        value={email}
                        onFocus={handleFocus}
                        onChange={handleEmailChange}
                        required
                        />
                </div>
                <div className="form-field">
                <label style={{ visibility: 'hidden', position: 'absolute' }} name="message">message</label>
                    <input 
                        type="date" 
                        placeholder="mm/dd/yyyy" 
                        className="text-box-input"
                        value={date}
                        onFocus={handleFocus}
                        onChange={handleDateChange}
                        required
                        />
                </div>
                <div className="text-field">
                    <textarea 
                        placeholder="Message" 
                        className="large-input-box"
                        value={message}
                        onFocus={handleFocus}
                        onChange={handleMessageChange}
                        required
                        />
                </div>
                <button type="submit" className="submit-btn">{loading ? <CircularProgress size={18} /> : 'Send'}</button>
                </form>
                <Notification error = {notifications}/>
            </div>
        </React.Fragment>
    )
}

export default Form;