import { h } from 'preact';
import Link from 'src/components/link/link';
import PageHeader from 'src/components/page-header/page-header';
import Sidebar from 'src/components/sidebar/sidebar';
import 'src/global.scss';
import './privacy.scss';

export default function Privacy() {
    return (
        <div className="layout">
            <Sidebar />
            <div className="privacy-policy">
                <PageHeader>
                    privacy policy
                </PageHeader>
                <div className="privacy-policy-content">
                    <header>
                        <p>
                            Last updated: August 9, 2022
                        </p>
                    </header>
                    <main>
                        <p>
                            stevezelek.com operates <Link href="https://www.stevezelek.com">https://www.stevezelek.com</Link> (the Service).
                            This site is to inform you of my policies regarding the collection, use, and disclosure of personal information.
                        </p>
                        <p>
                            At the site, I recognize that protecting the privacy of your personal information is important.
                            Here you will find information about what types of personal information I receive or collect when
                            you visit this site and how I protect your information.
                        </p>
                        <p>
                            I will use your personal information only for this site and to improve this site.
                            By using this site, you agree to the collection and use of information as described in the policy.
                        </p>
                        <h3>
                            Personal information I collect
                        </h3>
                        <h4>
                            Information you provide to me
                        </h4>
                        <p>
                            Personal information you may provide to me through the Service, or otherwise, includes:
                        </p>
                        <ul>
                            <li>
                                Contact details, such as your first and last name, email and mailing addresses, phone number,
                                professional title and company name
                            </li>
                            <li>
                                Communications that I exchange with you, including when you contact me with questions, feedback,
                                or otherwise
                            </li>
                            <li>
                                Marketing data, such as your preferences for receiving my marketing communications,
                                and details about your engagement with them
                            </li>
                        </ul>
                        <p>
                            Other data not specifically listed here, which I will still use as described in this Privacy Policy
                            or as otherwise disclosed at the time of collection.
                        </p>
                        <h4>
                            Third party sources
                        </h4>
                        <p>
                            I may combine personal information I receive from you with personal information I obtain from
                            other sources, such as:
                        </p>
                        <ul>
                            <li>
                                Data providers, such as information services and data licensors
                            </li>
                            <li>
                                Public sources, such as social media platforms
                            </li>
                            <li>
                                Marketing partners, such as companies that have entered into joint marketing
                                relationships with me
                            </li>
                        </ul>
                        <h4>
                            Automatic data collection
                        </h4>
                        <p>
                            I, my service providers, and my business partners may automatically log information about you,
                            your computer or mobile device, and your interaction over time with the Service,
                            my communications and other online services, such as:
                        </p>
                        <ul>
                            <li>
                                Device data, such as your computer's or mobile device's operating system type and version,
                                manufacturer and model, browser type, screen resolution, RAM and disk size,
                                CPU usage, device type (e.g., phone, tablet), IP address, unique identifiers
                                (including identifiers used for advertising purposes), language settings, mobile device carrier,
                                radio/network information (e.g., WiFi, LTE, 3G), and general location information such as city,
                                state or geographic area
                            </li>
                            <li>
                                Online activity data, such as pages or screens you viewed, how long you spent on a page or screen,
                                the website you visited before browsing to the Service, navigation paths between pages or screens,
                                information about your activity on a page or screen, access times, and duration of access,
                                and whether you have opened my marketing emails or clicked links within them
                            </li>
                            <li>
                                Cookies, which are text files that websites store on a visitor's device to uniquely
                                identify the visitor's browser or to store information or settings in the browser
                                for the purpose of helping you navigate between pages efficiently, remembering your preferences,
                                enabling functionality, helping me understand user activity and patterns, and facilitating online advertising
                            </li>
                        </ul>
                        <h3>
                            How I use your personal information
                        </h3>
                        <p>
                            I use your personal information for the following purposes or as otherwise
                            described at the time of collection:
                        </p>
                        <h4>
                            Service delivery
                        </h4>
                        <p>
                            I use your personal information to:
                        </p>
                        <ul>
                            <li>
                                provide, operate and improve the Service and my business
                            </li>
                            <li>
                                communicate with you about the Service, including by sending announcements,
                                updates, security alerts, and support and administrative messages
                            </li>
                            <li>
                                understand your needs and interests, and personalize your experience with the
                                Service and my communications
                            </li>
                            <li>
                                provide support for the Service, respond to your requests, questions and feedback
                            </li>
                        </ul>
                        <h4>
                            Research and development
                        </h4>
                        <p>
                            I may use your personal information for research and development purposes,
                            including to analyze and improve the Service and my business.
                            As part of these activities, I may create aggregated, de-identified or other
                            anonymous data from personal information I collect. I make personal information
                            into anonymous data by removing information that makes the data personally identifiable to you.
                            I may use this anonymous data and share it with third parties for my lawful business purposes,
                            including to analyze and improve the Service and promote my business.
                        </p>
                        <h4>
                            Direct marketing
                        </h4>
                        <p>
                            I may send you direct marketing communications as permitted by law,
                            including by email. You may opt-out of my marketing communications as described
                            in the Opt-out of marketing communications section below.
                        </p>
                        <h4>
                            Compliance and protection
                        </h4>
                        <p>
                            I may use your personal information to:
                        </p>
                        <ul>
                            <li>
                                comply with applicable laws, lawful requests, and legal process,
                                such as to respond to subpoenas or requests from government authorities
                            </li>
                            <li>
                                protect my, your or others' rights, privacy, safety or property
                                (including by making and defending legal claims)
                            </li>
                            <li>
                                enforce the terms and conditions that govern the Service
                            </li>
                            <li>
                                prevent, identify, investigate and deter fraudulent, harmful, unauthorized,
                                unethical or illegal activity, including cyberattacks and identity theft
                            </li>
                        </ul>
                        <h3>
                            How I share your personal information
                        </h3>
                        <p>
                            I may share your personal information with the following parties and as otherwise
                            described in this Privacy Policy or at the time of collection:
                        </p>
                        <h4>
                            Service providers
                        </h4>
                        <p>
                            Companies and individuals that provide services on my behalf or help me operate the
                            Service or my business (such as hosting, information technology, payment processors,
                            customer support, email delivery, and website analytics services).
                        </p>
                        <h4>
                            Professional advisors
                        </h4>
                        <p>
                            Professional advisors, such as lawyers, auditors, bankers and insurers,
                            where necessary in the course of the professional services that they render to me.
                        </p>
                        <h4>
                            Authorities and others
                        </h4>
                        <p>
                            Law enforcement, government authorities, and private parties, as I believe in good faith
                            to be necessary or appropriate for the compliance and protection purposes described above.
                        </p>
                        <p>
                            Please keep in mind that whenever you voluntarily make your personal information available
                            for viewing by third parties or the public on or through my Service, that information can be seen,
                            collected and used by others. I are not responsible for any use of such information by others.
                        </p>
                        <h3>
                            Your choices
                        </h3>
                        <p>
                            You have the following choices with respect to your personal information.
                        </p>
                        <h4 id="opt-out-of-marketing-communications">
                            Opt-out of marketing communications
                        </h4>
                        <p>
                            You may opt out of marketing-related emails by following the opt-out or
                            unsubscribe instructions at the bottom of the email.
                            You may continue to receive service-related and other non-marketing emails.
                        </p>
                        <h4>
                            Cookies
                        </h4>
                        <p>
                            Most browser settings let you delete and reject cookies placed by websites.
                            Many browsers accept cookies by default until you change your settings.
                            If you do not accept cookies, you may not be able to use all functionality of the Service
                            and it may not work properly. For more information about cookies,
                            including how to see what cookies have been set on your browser and how to manage and delete them,
                            visit <Link href="https://www.allaboutcookies.org">https://www.allaboutcookies.org</Link>.
                        </p>
                        <h4>
                            Do Not Track
                        </h4>
                        <p>
                            Some Internet browsers may be configured to send "Do Not Track" signals to the online services that you visit.
                            I currently do not respond to "Do Not Track" or similar signals.
                            To find out more about "Do Not Track", please visit <Link href="https://www.allaboutdnt.com">https://www.allaboutdnt.com</Link>.
                        </p>
                        <h4>
                            Declining to provide information
                        </h4>
                        <p>
                            I need to collect personal information to provide certain services.
                            If you do not provide the information I identify as required or mandatory,
                            I may not be able to provide those services.
                        </p>
                        <h4>
                            Other sites and services
                        </h4>
                        <p>
                            The Service may contain links to websites and other online services operated by third parties.
                            In addition, my content may be integrated into web pages or other online services
                            that are not associated with me.
                            These links and integrations are not an endorsement of, or representation that I are affiliated with,
                            any third party.
                            I do not control websites or online services operated by third parties, and I are not responsible for their actions.
                        </p>
                        <h4>
                            Security
                        </h4>
                        <p>
                            I employ a number of technical, organizational and physical safeguards designed to protect
                            the personal information I collect.
                            However, no security measures are failsafe and I cannot guarantee the
                            security of your personal information.
                        </p>
                        <h4>
                            International data transfer
                        </h4>
                        <p>
                            I am a citizen of the U.S.A. and may use service providers who operate in other countries.
                            Your personal information may be transferred to other locations where privacy laws may
                            not be as protective as the laws of your state, province, or country.
                        </p>
                        <h4>
                            Children
                        </h4>
                        <p>
                            The Service is not intended for use by children under 16 years of age.
                            If I learn that I have collected personal information through the Service from a
                            child under 16 without the consent of the child's parent or guardian as required by law, I will delete it.
                        </p>
                        <h4>
                            Changes to this Privacy Policy
                        </h4>
                        <p>
                            I reserve the right to modify this Privacy Policy at any time.
                            If I make material changes to this Privacy Policy, I will notify you by updating the date of this Privacy Policy
                            and posting it on the Service.
                            If required by law I will also provide notification of changes in another way that I believe is reasonably
                            likely to reach you, such as via email or another manner through the Service.
                            Any modifications to this Privacy Policy will be effective upon my posting the modified version
                            (or as otherwise indicated at the time of posting).
                            In all cases, your use of the Service after the effective date of any modified Privacy Policy indicates
                            your acceptance of the modified Privacy Policy.
                        </p>
                        <h4>
                            How to contact me
                        </h4>
                        <p>
                            You can contact me via email at (<Link href="mailto:smzelek@gmail.com">smzelek@gmail.com</Link>).
                        </p>
                    </main>
                </div>
            </div>
        </div>
    )
}
