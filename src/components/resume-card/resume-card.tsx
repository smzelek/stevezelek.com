import { h, JSX } from "preact";
import './resume-card.scss';

export interface ResumeCardProps {
    icon: string;
    company: string;
    position: string;
    start: Date;
    end: Date | null;
    isAcquisition?: boolean;
}
export default function ResumeCard({ icon, company, position, start, end, isAcquisition }: ResumeCardProps): JSX.Element {
    const dateToString = (date: Date | null) => {
        if (!date) {
            return 'present';
        }
        const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = date.getMonth();

        const year = date.getFullYear();

        return `${MONTHS[month]} ${year}`
    }

    const timeWorking = (start: Date, end: Date) => {
        let fullYrs = (end.getFullYear() - start.getFullYear());
        let months = end.getMonth() - start.getMonth();

        if (months < 0) {
            fullYrs--;
            months += 12;
        }

        const monthPart = (() => {
            if (months === 0) {
                return '';
            }
            if (months === 1) {
                return '1 month'
            }
            return `${months} months`
        })();

        const yearPart = (() => {
            if (fullYrs === 0) {
                return '';
            }
            if (fullYrs === 1) {
                return '1 year'
            }
            return `${fullYrs} years`
        })();

        return [yearPart, monthPart].filter(x => !!x).join(' ');
    }

    return (
        <div className={`resume-card-wrapper ${isAcquisition ? 'acquisition' : ''}`}>
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
        </div>
    );
}