import { h, JSX } from 'preact';
import { BlogPostMeta } from '~frontend/models/blog-meta';
import Tag from '~frontend/components/tag/tag';
import './blog-card.scss';

export interface BlogCardProps {
    meta: BlogPostMeta;
}

export default function BlogCard(props: BlogCardProps): JSX.Element {
    return (
        <a className="blog-card" href={props.meta.url}>
            <div className="img-wrapper">
                <img src={props.meta.img} alt={props.meta.imgAltText} />
            </div>
            <div className="text-wrapper">
                <h3>
                    {props.meta.title}
                </h3>
                <p className="description">
                    {props.meta.description}
                </p>
                <p className="meta">
                    {`${props.meta.date} · ${props.meta.length}`}
                </p>
                <ul className="tags">
                    {props.meta.tags.map(t => (<Tag key={t} name={t} />))}
                </ul>
            </div>
        </a>
    );
}
