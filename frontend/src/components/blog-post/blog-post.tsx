import { h, JSX } from 'preact';
import Sidebar from '~frontend/components/sidebar/sidebar';
import Tag, { TAGS } from '~frontend/components/tag/tag';
import BlogFooter from '~frontend/components/blog-footer/blog-footer';
import './blog-post.scss';

export interface BlogPostProps {
    meta: {
        img: string;
        imgAltText: string;
        title: string;
        date: string;
        length: string;
        tags: (keyof typeof TAGS)[];
    }
    children: JSX.Element[];
}

export default function BlogPost(props: BlogPostProps): JSX.Element {
    return (
        <div className="layout">
            <Sidebar />
            <div className="blog-post">
                <div className="blog-post-content">
                    <div className="img-wrapper">
                        <img src={props.meta.img} alt={props.meta.imgAltText} />
                    </div>
                    <header>
                        <h2 className="title">{props.meta.title}</h2>
                        <p className="meta">
                            {props.meta.date} · {props.meta.length}
                        </p>
                        <ul className="tags">
                            {props.meta.tags.map(t => (<Tag key={t} name={t} />))}
                        </ul>
                    </header>
                    <main>
                        {props.children}
                    </main>
                    <BlogFooter />
                </div>
            </div>
        </div>
    );
}
