import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Tag from '../tag/tag';
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
                        {/* <a href="https://twitter.com/intent/tweet?hashtags=webdevelopment&ref_src=twsrc%5Etfw&text=Check%20out%20this%20article%20by%20Steve%20Zelek%20that%20I%20just%20read.&tw_p=tweetbutton&url=https%3A%2F%2Fwww.stevezelek.com%2F%23%2Fblog%2Fwhy-our-company-needed-web-components"
                        className="twitter-share-button">
                        Tweet
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%2Fwww.stevezelek.com%2F%23%2Fblog%2Fwhy-our-company-needed-web-components&display=popup&ref=plugin&src=share_button">
                        Share
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fwww.stevezelek.com%2F%23%2Fblog%2Fwhy-our-company-needed-web-components">
                        Linkedin
                    </a> */}
                    </header>
                    <main>
                        {props.children}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;