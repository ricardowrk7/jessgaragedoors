import React from 'react';

const Form = () => {

    return (
        <React.Fragment>
            <div className="form-container">
                <form>
                <div className="form-field">
                <input placeholder="Name" type="name" className="text-box-input"/>
                </div>
                <div className="form-field">
                    <input placeholder="Phone" type="phone" className="text-box-input"/>
                </div>
                <div className="form-field">
                    <input placeholder="E-mail" type="email" className="text-box-input"/>
                </div>
                <div className="form-field">
                    <input type="date" placeholder="mm/dd/yyyy" className="text-box-input"/>
                </div>
                <div className="text-field">
                    <textarea placeholder="Message" className="large-input-box"/>
                </div>
                <button type="submit" className="submit-btn">Send</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Form;