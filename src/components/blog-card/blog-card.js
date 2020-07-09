import { h } from 'preact';
import Tag from '../tag/tag';
import './blog-card.scss';

function BlogCard(props) {
    return (
        <div className="blog-card-wrapper">
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
        </div>
    );
}

export default BlogCard;
