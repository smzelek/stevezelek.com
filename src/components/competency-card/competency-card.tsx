import { h, JSX } from "preact";
import { useMemo } from "preact/hooks";
import './competency-card.scss';

export interface TechnologyProps {
    name: string;
    proficiency: number;
}
const Technology = ({ name, proficiency }: TechnologyProps) => {
    const titles: Record<number, string> = {
        2: 'Frequent Personal Use',
        3: 'Heavy Production Use',
        4: 'Thorough Understanding',
        5: 'Expert Understanding',
    };

    return (
        <div className="technology">
            {name}
            <div className="proficiency-bar" title={titles[proficiency]}>
                {new Array(5).fill("").map((p, i) => (i + 1 > proficiency) ? <div className="segment empty" /> : <div className="segment" />)}
            </div>
        </div>
    );
}

export default function CompetencyCard({ title, type, technologies }: { title: string, type: string, technologies: TechnologyProps[] }): JSX.Element {
    const sortedTechnologies = useMemo(() => {
        return technologies.sort((t1, t2) => {
            if (t1.proficiency === t2.proficiency) {
                return 0;
            }
            return t2.proficiency - t1.proficiency;
        })
    }, [technologies]);

    return (
        <div className="competency-card">
            <h4 className="title">{title}</h4>
            <div className={`bars ${type}`}>
                {sortedTechnologies.map((l, i) => <Technology key={i} {...l} />)}
            </div>
        </div>
    );
}
