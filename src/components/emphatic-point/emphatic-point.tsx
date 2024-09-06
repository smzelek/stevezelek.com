import { h, JSX } from 'preact';
import './emphatic-point.scss';

interface EmphaticPointProps {
    children: string | (string | JSX.Element)[];
}

export default function EmphaticPoint({ children }: EmphaticPointProps): JSX.Element {
    return (
        <div className="emphatic-point">
            <blockquote className="quote">
                {typeof children === 'string' ? (
                    <p className="caption" dangerouslySetInnerHTML={{ __html: children }}>
                    </p>
                ) : (<p className="caption">
                    {children}
                </p>)}
            </blockquote>
        </div>
    );
}
