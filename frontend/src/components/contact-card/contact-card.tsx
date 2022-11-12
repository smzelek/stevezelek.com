import { h } from 'preact';
import { useState } from 'preact/hooks';
import './contact-card.scss';

export default function ContactCard(): JSX.Element {
    const [wasMessageSent, setWasMessageSent] = useState(false);

    const onMessageSent = () => {
        setWasMessageSent(true);
    }

    return (
        <div className="contact-card">
            <h3>
                Now that we're friends...
            </h3>
            <h3>
                I'd love to hear from you!
            </h3>
            <div className="form-wrapper">
                <form onSubmit={() => onMessageSent()}
                    className={`contact-form ${wasMessageSent ? 'form-hidden' : ''}`}
                    action="https://formspree.io/smzelek@gmail.com"
                    method="POST"
                    target="_blank">
                    <label htmlFor="name">Name</label>
                    <input required
                        type="text"
                        id="name"
                        name="name" />
                    <label htmlFor="email">Email</label>
                    <input required
                        type="email"
                        id="email"
                        name="_replyto" />
                    <label htmlFor="message">Message</label>
                    <textarea required
                        id="message"
                        name="_message" />
                    <button type="submit">Send</button>
                </form>
                <p className={`form-complete-message ${!wasMessageSent ? 'form-hidden' : ''}`}>
                    Thanks! I'll be in touch soon.
                </p>
            </div>
        </div>
    );
}
