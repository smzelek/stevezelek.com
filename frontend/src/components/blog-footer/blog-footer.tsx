import preact, { h, JSX } from 'preact';
import TwitterIcon from '~frontend/components/icons/twitter-icon';
import LinkedInIcon from '~frontend/components/icons/linkedin-icon';
import GithubIcon from '~frontend/components/icons/github-icon';
import Link from '~frontend/components/link/link';
import './blog-footer.scss';
import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import Typing from './typing';

export default function BlogFooter(): JSX.Element {
    const [formInView, setFormInView] = useState(false);
    const [showChat2, setShowChat2] = useState(false);
    const [showChat3, setShowChat3] = useState(false);
    const [showChat4, setShowChat4] = useState(false);
    const [showChat5, setShowChat5] = useState(false);
    const [inViewTime, setInViewTime] = useState<Date>(new Date());
    const [signedUp, setSignedUp] = useState(false);
    const [signupTime, setSignupTime] = useState<Date>(new Date());
    const [email, setEmail] = useState<string>('');
    const formRef = useRef<HTMLFormElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const SENGRID_EMAIL_MAX = 254;

    // wait for Form to be in view
    useEffect(() => {
        if (!formRef.current) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.filter(e => e.isIntersecting).forEach(() => {
                setFormInView(true);
                setInViewTime(new Date());
                observer.disconnect();
            })
        }, {
            threshold: 1.0
        });

        observer.observe(formRef.current);

        return () => {
            observer.disconnect();
        }
    }, [formRef])

    // animate appearances of chat messages
    useEffect(() => {
        if (!formInView) {
            return;
        }
        const chat2Timer = setTimeout(() => {
            setShowChat2(true);
        }, 1500);

        const chat3Timer = setTimeout(() => {
            setShowChat3(true);
        }, 4000);

        return () => {
            clearTimeout(chat2Timer);
            clearTimeout(chat3Timer);
        }
    }, [formInView])

    // animate appearances of signoff messages
    useEffect(() => {
        if (!signedUp) {
            return;
        }
        const chat4Timer = setTimeout(() => {
            setShowChat4(true);
        }, 1000);

        const chat5Timer = setTimeout(() => {
            setShowChat5(true);
        }, 3000);

        return () => {
            clearTimeout(chat4Timer);
            clearTimeout(chat5Timer);
        }
    }, [signedUp])

    const Time = ({ time }: { time: Date }) => {
        const { hrs, mins } = useMemo(() => {
            const hrs = time.getHours();
            const mins = time.getMinutes();
            return {
                hrs: hrs < 10 ? `0${hrs}` : hrs,
                mins: mins < 10 ? `0${mins}` : mins
            };
        }, [time])
        return (<span className="time">{hrs}:{mins}</span>);
    }

    const User = ({ children }: { children: string }) => {
        return (<span className="user">{children}</span>);
    };

    const onSubmitForm = () => {
        if (!email) {
            return;
        }
        setSignedUp(true);
        setSignupTime(new Date());
    }

    return (
        <footer className="blog-footer">
            <form
                autocomplete="off"
                className="newsletter-chat"
                ref={formRef}
                onSubmit={onSubmitForm}
                target="_blank">
                <div className="chat-header">
                    <h3>
                        chat
                    </h3>
                </div>
                <div className={`chat ${formInView ? 'show' : ''}`}>
                    {Time({ time: inViewTime })}
                    <User>szelek:</User>
                    <Typing done={formInView} text="hey there! if you liked this article, subscribe for more content like this" />
                </div>
                <div className={`chat ${showChat2 ? 'show' : ''}`}>
                    {Time({ time: inViewTime })}
                    <User>szelek:</User>
                    <Typing done={showChat2} text="i won't send you spam and you can unsubscribe at any time" />
                </div>
                <div className={`chat ${showChat3 ? 'show' : ''}`}>
                    {Time({ time: inViewTime })}
                    <User>you:</User>
                    <div className={`email ${signedUp ? 'signed-up' : ''}`}>
                        <input
                            ref={inputRef}
                            required
                            type="email"
                            id="email"
                            placeholder="you@email.com"
                            maxLength={SENGRID_EMAIL_MAX}
                            disabled={signedUp}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                        <button type="submit">send</button>
                    </div>
                </div>
                <div className={`chat ${showChat4 ? 'show' : ''}`}>
                    {Time({ time: signupTime })}
                    <User>szelek:</User>
                    <Typing done={showChat4} text="thanks! see you soon!" />
                </div>
                <div className={`chat ${showChat5 ? 'show' : ''}`}>
                    {Time({ time: signupTime })}
                    <span className="logout">
                        szelek has left to go write more articles
                    </span>
                    <span />
                </div>
            </form>
            {/* TODO: Add "Share" buttons here. */}
            <div className="identifiers">
                <img src="/assets/me/me.jpg" type="image/jpeg" alt="A headshot of Steve Zelek." />
                <h3>steve zelek</h3>
                <h4>software maker</h4>
                <div className="contact">
                    <TwitterIcon />
                    <GithubIcon />
                    <LinkedInIcon />
                </div>
                <Link className="demure" href="/privacy/">privacy</Link>
            </div>
        </footer>
    );
}

