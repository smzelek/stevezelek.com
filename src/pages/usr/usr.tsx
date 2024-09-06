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
            icon: "/assets/builder_logo.jpg",
            company: "Builder.io",
            position: "Software Engineer",
            start: new Date(2024, 7, 31),
            end: null,
        },
        {
            icon: "/assets/outsystems_logo.png",
            company: "OutSystems (acquisition of Ionic)",
            position: "Sr. Full Stack Developer",
            start: new Date(2024, 0, 1),
            end: new Date(2024, 7, 31),
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
            proficiency: 5
        },
        {
            name: "Stencil",
            proficiency: 4
        },
        {
            name: "Vue",
            proficiency: 2
        },
        {
            name: "Redux",
            proficiency: 5
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
            proficiency: 3
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
            proficiency: 3
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
                        Hi, I'm Steve. I'm a collaborative developer with a passion for making excellent things.
                    </p>
                    <p>
                        I spend most of my free time teaching myself new stuff, technical or otherwise.
                    </p>
                    <p>
                        One summer in college, I did two internships at once!
                    </p>
                    <div className="separator" />
                    <p>
                        I've led short and long-term projects, and I always find ways to innovate on the job.
                    </p>
                    <p>
                        The pace of tech work means there is always an interesting problem to solve,
                    </p>
                    <p>
                        and I love having the opportunity to do challenging work with a positive impact.
                    </p>
                    <div className="separator" />
                    <div className="competencies">
                        <CompetencyCard technologies={frontend} title="frontend" type="frontend" />
                        <CompetencyCard technologies={backend} title="backend" type="backend" />
                        <CompetencyCard technologies={devops} title="devops" type="devops" />
                    </div>
                    <div className="separator" />
                    <GithubCard />
                    {jobs.map(j => (
                        <Fragment>
                            <div className="separator" />
                            <ResumeCard {...j} />
                        </Fragment>
                    ))}
                    <div className="separator" />
                    <ContactCard />
                </main>
            </div>
        </div>
    )
}
