import { h, JSX } from "preact";
import './resume-card.scss';

export interface ResumeCardProps {
    icon: string;
    company: string;
    position: string;
    start: Date;
    end: Date | null;
}
export default function ResumeCard({ icon, company, position, start, end }: ResumeCardProps): JSX.Element {
    const dateToString = (date: Date | null) => {
        if (!date) {
            return '';
        }
        const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = date.getMonth();

        const year = date.getFullYear();

        return `${MONTHS[month]} ${year}`
    }

    const timeWorking = (start: Date, end: Date) => {
        const yrs = Math.max((end.getFullYear() - start.getFullYear()) - (end.getMonth() <= start.getMonth() ? 1 : 0) + 1, 1);
        return `(~${yrs}yr)`
    }

    return (
        <div className="resume-card">
            <img src={icon} />
            <div className="job-info">
                <h3>{company}</h3>
                <div className="position">
                    <h4>{position}</h4>
                    <span className="time">
                        {timeWorking(start, end || new Date())}
                    </span>
                </div>
                <p className="dates">
                    {dateToString(start)} - {dateToString(end)}
                </p>
            </div>
        </div>
    );
}