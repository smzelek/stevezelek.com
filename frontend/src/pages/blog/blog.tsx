import { h, JSX } from 'preact';
import Sidebar from '~frontend/components/sidebar/sidebar';
import BlogCard from '~frontend/components/blog-card/blog-card';
import { WHY_OUR_COMPANY_META } from './why-our-company-needed-web-components/why-our-company-wcs'
import '~frontend/global.scss';
import './blog.scss';
import PageHeader from '~frontend/components/page-header/page-header';

const BLOG_POSTS = [WHY_OUR_COMPANY_META];

export default function Blog(): JSX.Element {
    return (
        <div className="layout">
            <Sidebar />
            <div className="blog">
                <PageHeader>~/blog</PageHeader>
                <main>
                    {BLOG_POSTS.map((blog_meta, i) => (<BlogCard key={i} meta={blog_meta} />))}
                </main>
            </div>
        </div>
    )
}
