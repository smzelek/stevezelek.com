import { Fragment, h } from 'preact';
import BlogPost from 'src/components/blog-post/blog-post';
import EmphaticPoint from 'src/components/emphatic-point/emphatic-point';
import Prism from 'prismjs';
import './why-our-company-wcs.scss';
import 'src/global.scss';
import { BlogPostMeta } from 'src/models/blog-meta';
import Code from 'src/components/code/code';
import CodeBlock from 'src/components/code-block/code-block';
import Link from 'src/components/link/link';

export const WHY_OUR_COMPANY_META: BlogPostMeta = {
    title: "Why our company needed web components – and yours might too",
    img: "/assets/web-components-logo.png",
    imgAltText: "A logo for Web Components technology.",
    date: "Jul 10th, 2020",
    length: "10 min read",
    tags: ["frontend", "devops"],
    description: `
        Is it possible to create a shared component library that supports every framework our teams choose,
        without ever needing to update legacy apps? That's the riddle that a large company like ours faces.
    `,
    url: "/blog/why-our-company-needed-web-components/"
}

const angularSupportUrl = "https://angular.io/guide/releases#support-policy-and-schedule";
const reactSupportUrl = "https://github.com/reactjs/reactjs.org/issues/1745";
const angularInterestUrl = "https://2019.stateofjs.com/front-end-frameworks/";
const canIUseUrl = "https://caniuse.com/#feat=custom-elementsv1";
const customElementsEverywhereUrl = "https://custom-elements-everywhere.com/";
const webComponentsUrl = "https://www.webcomponents.org/introduction";
const stencilJSUrl = "https://stenciljs.com/docs/introduction";
const stencilRepoUrl = "https://github.com/smzelek/example-web-component";

declare module 'preact/src/jsx' {
    // eslint-disable-next-line no-unused-vars
    namespace JSXInternal {

        // eslint-disable-next-line no-unused-vars
        interface IntrinsicElements {
            'my-component': unknown;
        }
    }
}

export default function WhyOurCompanyWCs() {
    setTimeout(() => {
        Prism.highlightAll()
    }, 0);

    return (
        <div className="why-wcs">
            <BlogPost meta={WHY_OUR_COMPANY_META}>
                <h3>A little bit of background</h3>
                <p>
                    Hi! I'm Steve, a full stack developer. This blog post is about creating a shared component library for
                    a large company with 700+ employees and over 150 in tech, distributed across the globe. The company
                    sells a SaaS product comprised of dozens of web apps that each fulfill a different niche of our complex
                    domain space (FinTech). But to the users, they are meant to be seen as one harmonious application. Essentially, this is
                    a microfrontend architecture. The problem is, how do we make the product <span style="font-style:italic">feel&nbsp;</span> like a single application?
                </p>
                <p>
                    At the very least, we should share our atomic UI components, right?
                </p>
                <p>
                    Yes! But when I say "dozens of apps", you say ... "maintenance!"
                </p>
                <h3>
                    Maintaining dozens of apps is hard
                </h3>
                <p>
                    If your tech shop is anything like ours, you quickly got on board the framework train for building web apps.
                    What's not to love? Reliable updates, solid feature sets, clear patterns, and strong communities. Create
                    React App and the Angular CLI are both powerful tools for building web apps, offering out-of-the-box best
                    practices and the freedom to tinker and optimize to your heart's content. And if you only ever wrote one web
                    app, finished it, and never came back to it – well, that would be the happy ending to the story I'm
                    telling.
                </p>
                <p>
                    But what if you're like us? With dozens of apps, we'd like to share some code. We have a thorough component
                    design library at our company, and it would be nice if we could turn those into reusable HTML components. Then
                    our dozens of apps would have consistent look-and-feel, and the SaaS product would seem like a single
                    application.
                </p>
                <EmphaticPoint>The goal: create a company-wide component library.</EmphaticPoint>
                <p>
                    There's just two problems...
                </p>
                <h3>
                    Problem 1: Frameworks
                </h3>
                <p>
                    I mentioned earlier that React and Angular are both wonderful frameworks for web app development. Well,
                    that's great ... and not so great. How do you pick between them? I won't deliberate over their individual
                    merits here. That's a thankless task consigned to the legions of tech bloggers. Here, I only dip my toe into
                    the debate, in order to proclaim that all should be free to choose their favorite framework. At our company,
                    we've mostly chosen Angular. But we impose few restrictions on technical decisions, and so there are several
                    apps written using React, and Vue, as well.
                </p>
                <EmphaticPoint>
                    Many companies believe in giving their teams the freedom to make their own technical decisions.
                </EmphaticPoint>
                <p>
                    How can we create a component library that supports all frameworks? Most framework apps are compiled in some
                    way, or require shipping with a compiler or interpreter. Suffice to say, frameworks don't play nicely together.
                </p>
                <p>
                    Sure, we could just write our component library in Angular, since it's the most common framework
                    at our company. But what if we stop using Angular someday? The elephant graveyard of past web technologies regards
                    us balefully on all sides as we peruse the internet over a morning coffee. I make no promises,
                    but it's a safe bet that by the time we all go into retirement, Angular will hobble along with
                    us as we discuss the fancy new tools the kids are using. If you don't believe me, check
                    out <Link href={angularInterestUrl}>this trendline</Link> for developer interest in Angular.
                </p>
                <p>
                    But that's not all…
                </p>
                <h3>
                    Problem 2: Versioning
                </h3>
                <p>
                    If incompatibility between frameworks were not a large enough thorn in our side, we are confronted with
                    another issue. Breaking changes between major versions are common knowledge. If you started writing Angular
                    code in 2015, you may have been dismayed by the 2016 release of Angular 2, which had an unapologetic policy
                    of no backward compatibility. Even in less extreme circumstances, anyone who has been responsible for
                    upgrading an app from Angular 5 to 6 will remember the woes brought on by their RxJS major version bump.
                </p>
                <EmphaticPoint>
                    For any sufficiently large web app,
                    <br />
                    a major version increase is bittersweet news.
                </EmphaticPoint>
                <p>
                    Google, for their part, is not shy about their intention to forge bravely onwards into the web development
                    frontier; whether you come with them or not. The <Link href={angularSupportUrl}> official Angular support policy</Link> lists
                    long term support as a mere 18 months per major version. React has no official policy, but the
                    co-author of Create React App has said that there is (almost) <Link href={reactSupportUrl}> no long term support </Link> for
                    any former major versions.
                </p>
                <p>
                    Technology changes every day. We need to plan for that...
                </p>
                <h3>
                    The solution that wouldn't work
                </h3>
                <p>
                    So with that knowledge in hand, let's consider the situation at our company again. Dozens of web apps, and
                    new major versions popping up about once a year. As we develop new apps, we inevitably leave some behind on
                    old versions of our chosen frameworks. Is the solution so draconian as to mandate that we must keep every
                    web app on the latest version of Angular and never deviate? If you think so, try running your proposal by a
                    project manager and check their pulse.
                </p>
                <p>
                    If we standardized and updated every app, it would require rewriting legacy code that hasn't seen the light
                    of a text editor in years. Besides being a terrible cost-benefit proposition, we've already seen that it's
                    not future-proof. A new major version of Angular would come out in another 18 months and prompt another company-wide
                    rewrite (if we had even finished the previous rewrite!). Plus, we might not want to use Angular forever. One shudders
                    to think what that migration would look like.
                </p>
                <EmphaticPoint>
                    Picking a single framework and version doesn't solve compatibility -
                    <br />
                    it just guarantees technical debt.
                </EmphaticPoint>
                <p>
                    So, is it possible for us to create a shared component library that supports every framework our teams
                    choose, without ever needing to update legacy apps? At this point, it almost sounds too good to be true.
                    That's the kind of riddle that a large company like ours faces.
                </p>
                <p>
                    Luckily, we solved this riddle!
                </p>
                <h3>
                    The answer we've been waiting for
                </h3>
                <p>
                    In a sense, HTML is already a shared component library used by every web developer. When you write the
                    tag <Code>&lt;input /&gt;</Code> on the page, you know what to expect (with minor style differences).
                    A major benefit of component-based frameworks like Angular and React is that you can write and reuse custom
                    elements like <Code>&lt;special-fancy-input /&gt;</Code>. The catch is that those custom elements only work
                    within the framework's compiler, or when you ship the framework alongside them.
                </p>
                <p>
                    But what if browsers provided their own API for defining custom elements, without needing
                    Angular and React?
                </p>
                <p>
                    In 2011, Alex Russell presented a proposal for such a technology: <Link href={webComponentsUrl}>Web Components</Link>.
                    It has been a long journey since then. Browsers were slow to add support for this new standard. At long last, in
                    January of 2020, Microsoft released version 79 of Edge, bringing native support for Web Components to every mainstream
                    evergreen browser.
                </p>
                <p>
                    This means that if you write a library using Web Components, you get elements that feel like native HTML and
                    work in <Link href={canIUseUrl}>every browser</Link> and <Link href={customElementsEverywhereUrl}>every framework</Link>.
                    Since Web Components don't rely on a framework, we no longer need to worry about framework and version
                    compatibility. Talk about two birds with one stone! Often, in web development, it can feel like browsers are
                    our enemies in a battle for consistent layouts. But, refreshingly, browsers have
                    cut this <Link href="https://www.history.com/news/what-was-the-gordian-knot">Gordian knot</Link> for us.
                </p>
                <EmphaticPoint>Web Components pave the way to simple shared components.</EmphaticPoint>
                <p>
                    The best part? Clever developers have already created tools to generate standards-based Web Components for
                    us. If you've ever used a modern framework, you can write a Web Component too.
                </p>
                <h3>
                    An example you can try
                </h3>
                <p>
                    One great option for building hassle-free Web Components is by using a compiler
                    called <Link href={stencilJSUrl}>StencilJS</Link>. StencilJS uses familiar JSX syntax that looks and feels like
                    writing code in React. Here's an example.
                </p>
                <CodeBlock
                    title="my-component.tsx"
                    caption={<Fragment>
                        Check out <Link href={stencilRepoUrl}>the full code</Link> for this example component.
                    </Fragment>}>
                    <pre className="line-numbers">
                        <code className="language-tsx">
                            {`import { Component, h } from '@stencil/core';

                            @Component({
                                tag: 'my-component',
                                styleUrl: 'my-component.css',
                                shadow: true
                            })
                            export class MyComponent {
                                render() {
                                    return (
                                        <button>
                                            Wonderful Web Component
                                        </button>
                                    );
                                }
                            }`.replace(/ {28}/g, '').trim()}
                        </code>
                    </pre>
                </CodeBlock>
                <p>
                    Once you've built your Stencil components, you can distribute them as NPM packages or
                    using <Code>&lt;script&gt;</Code> tags. At our company, we're distributing our
                    Stencil component library using script tags. The huge benefit of this approach is that we can add
                    a <Link href="https://semver.org/">versioning scheme</Link> to the script tags. Whenever we make minor and patch versions changes to the
                    component library, every single web app immediately gets the latest changes.
                </p>
                <p>
                    Forget the days of updating, rebuilding, and redeploying every app. Now all it takes is a browser refresh!
                </p>
                <p>
                    You can try using my example Web Component in any app via the script tag method.
                    Below is the only code you need to add to your app.
                </p>
                <CodeBlock
                    title="index.html"
                >
                    <pre>
                        <code className="language-html">
                            {`
                            <head>
                            <script 
                                type="module" 
                                src="https://smzelek.github.io/web-component/build/web-component.esm.js">
                            </script>
                            </head>

                            <my-component></my-component>
                        `.replace(/ {28}/g, '').trim()}
                        </code>
                    </pre>
                </CodeBlock>
                <p style="margin-bottom: 20px;">
                    If everything went well, you should see a shiny blue button added to your application.
                </p>
                <script type="module" src="https://smzelek.github.io/web-component/build/web-component.esm.js" />
                <my-component />
                <p>
                    This is that same component. Web Components! They're just that simple.
                </p>
                <h3>
                    Conclusion
                </h3>
                <p>
                    Let's revisit the mission we set out to accomplish.
                </p>
                <p>
                    Our company has dozens of apps that make up our SaaS product. We wanted to create a shared
                    component library that could be used by every app. If that worked, then we could finally have a
                    consistent UI across the entire product.
                </p>
                <p>
                    The biggest problems standing in our way were that 1) our apps run on different frameworks, and 2) there are many
                    versions of those frameworks. In the worst-case scenario, we would've needed to keep every
                    app on one framework, and one version. The maintenance and refactoring required would've made
                    that impossible. Plus, it's not wise to rely on a single framework forever.
                </p>
                <EmphaticPoint>Instead of synchronizing every app, we made our library universally compatible.</EmphaticPoint>
                <p>
                    By using the new technology of Web Components, we let browsers do the hard work for us. We used
                    StencilJS, which made it simple and familiar to write our Web Components. The shared component library
                    we created is compatible with every app, regardless of framework and version.
                </p>
                <p>
                    Our company finally has a shared component library that supports every framework our teams choose,
                    without ever needing to update legacy apps.
                </p>
                <p>
                    If your company is anything like ours, consider giving Web Components a try.
                    It could be the best tech decision you make all year.
                </p>
            </BlogPost >
        </div>
    );
}
