import { Fragment, h, JSX } from 'preact';
import Sidebar from 'src/components/sidebar/sidebar';
import ContactCard from 'src/components/contact-card/contact-card';
import 'src/global.scss';
import './usr.scss';
import PageHeader from 'src/components/page-header/page-header';
import GithubCard from 'src/components/github-card/github-card';
import ResumeCard, { ResumeCardProps } from 'src/components/resume-card/resume-card';
import CompetencyCard, { TechnologyProps } from 'src/components/competency-card/competency-card';

export default function Usr(): JSX.Element {

    const jobs: ResumeCardProps[] = [
        {
            icon: "/assets/abbyy_logo.png",
            company: "ABBYY",
            position: "Principal Developer",
            start: new Date(2025, 2, 10),
            end: null,
        },
        {
            icon: "/assets/builder_logo.jpg",
            company: "Builder.io",
            position: "Software Engineer",
            start: new Date(2024, 7, 31),
            end: new Date(2025, 2, 10),
        },
        {
            icon: "/assets/outsystems_logo.png",
            company: "OutSystems (acquisition)",
            position: "Sr. Full Stack Developer",
            start: new Date(2024, 0, 1),
            end: new Date(2024, 7, 31),
            isAcquisition: true
        },
        {
            icon: "/assets/ionic_logo.png",
            company: "Ionic",
            position: "Full Stack Developer",
            start: new Date(2021, 2, 1),
            end: new Date(2024, 0, 31),
        },
        {
            icon: "/assets/cf_logo.jpeg",
            company: "Chatham Financial",
            position: "Full Stack Developer",
            start: new Date(2017, 4, 1),
            end: new Date(2021, 2, 30),
        }
    ];
    const frontend: TechnologyProps[] = [
        {
            name: "JavaScript (TS)",
            proficiency: 5
        },
        {
            name: "CSS",
            proficiency: 5
        },
        {
            name: "HTML",
            proficiency: 5
        },
        {
            name: "React",
            proficiency: 5
        },
        {
            name: "Angular",
            proficiency: 4
        },
        {
            name: "NextJS",
            proficiency: 3
        },
        {
            name: "Vue",
            proficiency: 2
        },
        {
            name: "Redux",
            proficiency: 4
        },
    ];

    const backend: TechnologyProps[] = [
        {
            name: "Go",
            proficiency: 3
        },
        {
            name: "Python",
            proficiency: 4
        },
        {
            name: "NodeJS",
            proficiency: 4
        },
        {
            name: "C#",
            proficiency: 3
        },
        {
            name: "MongoDB",
            proficiency: 2
        },
        {
            name: "GraphQL",
            proficiency: 3
        },
        {
            name: "SQL",
            proficiency: 4
        },
        {
            name: "Swift",
            proficiency: 2
        },
    ];
    const devops: TechnologyProps[] = [
        {
            name: "Testing",
            proficiency: 5
        },
        {
            name: "AWS",
            proficiency: 4
        },
        {
            name: "Debugging and Profiling",
            proficiency: 3
        },
        {
            name: "Networking",
            proficiency: 2
        },
        {
            name: "Bash",
            proficiency: 4
        },
        {
            name: "Git",
            proficiency: 5
        },
        {
            name: "Terraform",
            proficiency: 4
        },
        {
            name: "Docker",
            proficiency: 4
        }
    ];

    return (
        <div className="layout">
            <Sidebar />
            <div className="bio">
                <PageHeader>~/usr</PageHeader>
                <main>
                    <p>
                        Hi I'm Steve. I like working with talented teams who can have fun while doing great work.
                    </p>
                    <p>
                        I spend most of my free time teaching myself new stuff, technical or otherwise.
                    </p>
                    <p>
                        I have mastered the art of having too many hobbies.
                    </p>
                    <div className="separator" />
                    <p>
                        I've led short and long-term projects, and I like finding ways to raise the bar at work.
                    </p>
                    <p>
                        I'm grateful that working in tech means there is always an interesting problem to solve,
                    </p>
                    <p>
                        and I love getting to do challenging work that makes customers happy.
                    </p>
                    <div className="separator" />
                    <div className="competencies">
                        <CompetencyCard technologies={frontend} title="frontend" type="frontend" />
                        <CompetencyCard technologies={backend} title="backend" type="backend" />
                        <CompetencyCard technologies={devops} title="devops" type="devops" />
                    </div>
                    <div className="separator" />
                    <GithubCard />
                    <div className="separator" />
                    {jobs.map(j => (
                        <Fragment>
                            <ResumeCard {...j} />
                            {j.isAcquisition ? null : <div className="separator" />}
                        </Fragment>
                    ))}
                    <ContactCard />
                </main>
            </div>
        </div>
    )
}
