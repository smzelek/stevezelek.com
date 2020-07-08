import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Tag from '../tag/tag';
import '../../global.scss';
import './blog-post.scss';
import TwitterIcon from '../icons/twitter-icon';
import LinkedInIcon from '../icons/linkedin-icon';

function BlogPost(props) {
    return (
        <div className="layout">
            <Sidebar></Sidebar>
            <div className="blog-post-wrapper">
                <div className="blog-post">
                    <header>
                        <div className="img-wrapper">
                            <img src={props.meta.img} />
                        </div>
                        <div className="text-wrapper">
                            <h3 className="title">{props.meta.title}</h3>
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
                            <h4>- steve zelek</h4>
                        </div>
                        <div className="detailed-sign-off">
                            <picture>
                                <source srcSet="
                                        ./assets/me/me-3x.webp 3x,
                                        ./assets/me/me-2x.webp 2x,
                                        ./assets/me/me-1x.webp 1x,
                                        " type="image/webp" />
                                <source srcSet="
                                        ./assets/me/me-3x.jpg 3x,
                                        ./assets/me/me-2x.jpg 2x,
                                        ./assets/me/me-1x.jpg 1x,
                                        " type="image/jpeg" />
                                <img src="./assets/me/me-1x.jpg" type="image/jpeg" alt="A headshot of Steve Zelek." />
                            </picture>
                            <h4>steve zelek</h4>
                            <h5>software maker</h5>
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