import { h } from "preact";
import { useMemo } from "preact/hooks";
import './competency-card.scss';

export interface TechnologyProps {
    name: string;
    proficiency: number;
}
const Technology = ({ name, proficiency }: TechnologyProps) => {
    return (
        <div className="technology">
            {name}
            <div className="proficiency-bar">
                {new Array(5).fill("").map((p, i) => (i + 1 > proficiency) ? <div className="segment empty" /> : <div className="segment" />)}
            </div>
        </div>
    );
}

export default function CompetencyCard({ title, type, technologies }: { title: string, type: string, technologies: TechnologyProps[] }): JSX.Element {
    const sortedTechnologies = useMemo(() => {
        return technologies.sort((t1, t2) => {
            if (t1.proficiency === t2.proficiency) {
                return t1.name.localeCompare(t2.name);
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
