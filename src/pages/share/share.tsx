import { h, JSX } from 'preact';
import Sidebar from 'src/components/sidebar/sidebar';
import 'src/global.scss';
import './share.scss';
import PageHeader from 'src/components/page-header/page-header';

const Links: LinkProps[] = [
    {
        title: 'Story Points Revisited',
        author: 'Ron Jeffries',
        authorDate: '2019-05-23',
        addedDate: '2024-04-29',
        link: 'https://ronjeffries.com/articles/019-01ff/story-points/Index.html',
        highlightBlock: 'To me, the important thing in Real Agile is to pick the next few things to do, and do them promptly. The key question is to find the most valuable things to do, and to do them quickly. Doing them quickly comes down to doing small slices of high value, and iterating rapidly. Story cost estimation doesn’t help much with that, if at all.',
        comment: "I've come to believe story points are mostly useless, the software planning version of a financier's technical analysis of a stock's moving average. It seems that because Value is so hard to calculate, we've all doubled down on trying to over-calculate the Effort part of the Agile equation.",
    },
    {
        title: 'Fast-forwarding decision making',
        author: 'James Stanier',
        authorDate: '2023-04-15',
        link: 'https://theengineeringmanager.substack.com/p/fast-forwarding-decision-making',
        addedDate: '2023-05-29',
        highlightBlock: 'All organisations waste a huge amount of time believing that they are making progress on decisions, when in fact they’re just involved in the theatre of decision making. This happens through indirect actions that feel like progress is being made, but in fact contribute nothing to it.',
        comment: '',
    },
];

type LinkProps = {
    title: string;
    author: string;
    authorDate: string | null;
    addedDate: string;
    link: string;
    highlightBlock: string;
    comment: string;
}
const ShareLink = (props: LinkProps) => {
    return (
        <div className='share-link'>
            <div className='top'>
                <div className='attribution'>
                    <a href={props.link} className='link'>
                        <span>{props.title}</span>
                    </a>
                    <span>by</span>
                    <span>{props.author}:</span>
                </div>
                <div className='date-written'>
                    <span>{props.authorDate}</span>
                </div>
            </div>
            <p className='highlight'>
                {props.highlightBlock}
            </p>
            {/* <div className='comment'>
                <img className="avatar" src="/assets/me/me-1x.jpg" />
                <span>{props.comment}</span>
            </div> */}
        </div>
    );
}

export default function Share(): JSX.Element {
    const sorted = [...Links].sort((l2, l1) => new Date(l1.addedDate).getTime() - new Date(l2.addedDate).getTime());
    return (
        <div className="layout">
            <Sidebar />
            <div className="share">
                <PageHeader>~/share</PageHeader>
                <main>
                    {sorted.map((l, i) => (<ShareLink key={i} {...l} />))}
                </main>
            </div>
        </div>
    )
}
