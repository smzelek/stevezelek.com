import { h } from 'preact';
import Sidebar from 'src/components/sidebar/sidebar';
import BlogCard from 'src/components/blog-card/blog-card';
import { WHY_OUR_COMPANY_META } from './why-our-company-wcs/why-our-company-wcs'
import 'src/global.scss';
import './blog.scss';

const BLOG_POSTS = [WHY_OUR_COMPANY_META];

function Blog() {
    return (
        <div className="layout">
            <Sidebar />
            <div className="blog">
                <header>
                    <h2 className="title">blog</h2>
                </header>
                <main>
                    {BLOG_POSTS.map((blog_meta, i) => (<BlogCard key={i} meta={blog_meta} />))}
                </main>
            </div>
        </div>
    )
}

export default Blog;