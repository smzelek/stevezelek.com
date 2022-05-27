import { h } from 'preact';
import Sidebar from '../sidebar/sidebar';
import Tag from '../tag/tag';
import TwitterIcon from '../icons/twitter-icon';
import LinkedInIcon from '../icons/linkedin-icon';
import '../../global.scss';
import './blog-post.scss';

function BlogPost(props) {
    return (
        <div className="layout">
            <Sidebar></Sidebar>
            <div className="blog-post-wrapper">
                <div className="blog-post">
                    <header>
                        <div className="img-wrapper">
                            <img src={props.meta.img} alt={props.meta.imgAltText} />
                        </div>
                        <div className="text-wrapper">
                            <h2 className="title">{props.meta.title}</h2>
                            <p className="meta">
                                {props.meta.date} · {props.meta.length}
                            </p>
                            <ul className="tags">
                                {props.meta.tags.map(t => (<Tag key={t} name={t} />))}
                            </ul>
                        </div>
                    </header>
                    <main>
                        {props.children}
                    </main>
                    <footer>
                        <div className="simple-sign-off">
                            <h3>- steve zelek</h3>
                        </div>
                        <div className="detailed-sign-off">
                            <picture>
                                <source srcSet="
                                        /assets/me/me-3x.jpg 3x,
                                        /assets/me/me-2x.jpg 2x,
                                        /assets/me/me-1x.jpg 1x,
                                        " type="image/jpeg" />
                                <img src="/assets/me/me-1x.jpg" type="image/jpeg" alt="A headshot of Steve Zelek." />
                            </picture>
                            <h3>steve zelek</h3>
                            <h4>software maker</h4>
                            <div className="contact">
                                <LinkedInIcon />
                                <TwitterIcon />
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;
