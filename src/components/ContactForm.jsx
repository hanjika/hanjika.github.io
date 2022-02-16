import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ContactForm = () => {
    const [sent, setSent] = useState(false);

    const sendMessage = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_75n1lpc', 
            'template_wvvt7wj', 
            e.target, 
            'user_W3XMQiPmYaZGzjNcjUg6r'
        ).then(res => {
            console.log(res)
        }).catch(error => {
            console.log(error);
        });
        e.target.reset();
        setSent(true);
    }

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = sent ? 'hidden' : 'auto';
    }, [sent]);

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <form data-aos='fade-left' className='contact-form' action='' onSubmit={sendMessage}>
                <div className='contact-row'>
                    <div className='single-input'>
                        <input type='text' name='name' required />
                        <label htmlFor='name' className='label'>
                            <span className='content'><b>Name</b></span>
                        </label>
                    </div>

                    <div className='single-input'>
                        <input type='email' name='user_email' required />
                        <label htmlFor='email' className='label'>
                            <span className='content'><b>Email</b></span>
                        </label>
                    </div>
                </div>

                <div className='single-input'>
                    <input type='text' name='message' rows='5' required />
                    <label htmlFor='message' className='label'>
                        <span className='content'><b>Message</b></span>
                    </label>
                </div>
                <button type='submit'>Send</button>
            </form>
            {sent && <div className='message-sent-modal'><div className='modal-content'><button className='close-modal' onClick={() => setSent(false)}>×</button><p>Thank you for your message. I will respond as soon as possible.</p></div></div>}
        </>
    );
};

export default ContactForm;
