import { h } from "preact";
import github from './github.json';
import './github-card.scss';
import Link from "../link/link";
const githubIcon = '/assets/icons/github.png';

export default function GithubCard() {
    console.log(github);
    const calendar = github.data.user.contributionsCollection.contributionCalendar;
    const colors = github.data.user.contributionsCollection.contributionCalendar.colors;
    const colorMap = {
        FIRST_QUARTILE: colors[0],
        SECOND_QUARTILE: colors[1],
        THIRD_QUARTILE: colors[2],
        FOURTH_QUARTILE: colors[3],
    }

    return (
        <a href="https://github.com/smzelek" className="github-card">
            <div className="top-info">
                <p className="source">
                    <img src={githubIcon} />
                    <Link className="demure">https://github.com/smzelek</Link>
                </p>
                <p className="count">
                    {calendar.totalContributions} contributions in the past year
                </p>
            </div>
            <div className="contributions" style={`grid-template-columns: repeat(${calendar.weeks.length}, max-content);`}>
                {calendar.months.reverse().map((month, i) => (
                    <span key={i}
                        className="month"
                        style={`grid-area: span 1 / span ${month.totalWeeks};`}>
                        {month.name}
                    </span>
                ))}
                {calendar.weeks.reverse().map((week, i) => (
                    <div key={i} className="week">
                        {week.contributionDays.concat(new Array(7 - week.contributionDays.length).fill({ contributionLevel: "NONE" }))
                            .map((day, i) => (
                                <div key={i}
                                    className="day"
                                    style={`background: ${colorMap[day.contributionLevel as keyof typeof colorMap]}`}
                                />
                            ))
                        }
                    </div>
                ))}
            </div>
        </a>
    )
}