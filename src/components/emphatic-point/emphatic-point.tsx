import { h, JSX } from 'preact';
import './emphatic-point.scss';

interface EmphaticPointProps {
    children: string | (string | JSX.Element)[];
}

export default function EmphaticPoint({ children }: EmphaticPointProps) {
    return (
        <div className="emphatic-point">
            <blockquote className="quote">
                <p className="content">
                    {children}
                </p>
            </blockquote>
        </div>
    );
}
