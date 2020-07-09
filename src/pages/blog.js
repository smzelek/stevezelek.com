import { h, render } from 'preact';
import Sidebar from '../components/sidebar/sidebar';
import BlogCard from '../components/blog-card/blog-card';
import { WHY_OUR_COMPANY_META } from './why-our-company-wcs';
import '../global.scss';
import './blog.scss';

const BLOG_POSTS = [WHY_OUR_COMPANY_META];

function Blog() {
    return (
        <div className="layout">
            <Sidebar></Sidebar>
            <div className="blog">
                <header>
                    <h2 className="title">blog</h2>
                </header>
                <main>
                    {BLOG_POSTS.map((blog_meta, i) => (<BlogCard key={i} meta={blog_meta}/>))}
                </main>
            </div>
        </div>
    )
};


render(
    <Blog />,
    document.body
);
