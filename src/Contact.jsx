import React from "react";


const Contact = () => {
    return(
        <>
      
   
    <div className="container-2">
        {/* <div className="store-info">
            <h2>STORE INFORMATION</h2>
            <div className="info-item">
                <img src="location-icon.svg" alt="Location"/>
                <span>Etrend Home Decor<br/>90 Street, Arizona 85002<br/>United States</span>
            </div>
            <div className="info-item">
                <img src="phone-icon.svg" alt="Phone"/>
                <span>Call us: (123) 456 789</span>
            </div>
            <div className="info-item">
                <img src="email-icon.svg" alt="Email"/>
                <span>Email us: sales@domain.com</span>
            </div>
        </div> */}
        <div className="contact-form">
            <h2>CONTACT US</h2>
            <form>
                <div className="form-group">
                    <label>Subject</label>
                    <select>
                        <option>Customer service</option>
                        <option>Sales Inquiry</option>
                        <option>Product Support</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" placeholder="your@email.com"/>
                </div>
                <div className="form-group">
                    <label>Attachment</label>
                    <input type="file" className="choose-file"/>
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="send-btn">SEND</button>
            </form>
        </div>
    </div>

        </>
    )
}
export default Contact;