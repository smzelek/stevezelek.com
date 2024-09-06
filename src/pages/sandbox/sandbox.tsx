import { Fragment, h, JSX } from 'preact';
import Sidebar from 'src/components/sidebar/sidebar';
import 'src/global.scss';
import './sandbox.scss';
import PageHeader from 'src/components/page-header/page-header';
import { BuilderComponent, builder, Builder, useIsPreviewing } from "@builder.io/react";
import { useEffect, useState } from 'preact/hooks';
import CodeBlock from 'src/components/code-block/code-block';

builder.init('69859596c6834d42a5011756f6a0699a');

// Make sure that every page where renders Builder 
// content calls the file containing this function call
Builder.registerComponent(CodeBlock, {
    name: 'CodeBlock',
    inputs: [
        {
            name: 'title', type: 'text',
        },
        {
            name: 'language', type: 'text',
        },
        {
            name: 'showLines', type: 'boolean',
        },
        {
            name: 'content', type: 'longText',
        },
        {
            name: 'caption', type: 'richText',
        },
    ],
})

export default function Sandbox(): JSX.Element {
    const isPreviewingInBuilder = useIsPreviewing();
    const [notFound, setNotFound] = useState<boolean>(false);
    const [content, setContent] = useState<any | null>(null);

    // get the page content from Builder
    useEffect(() => {
        async function fetchContent() {
            const content = await builder
                .get("page", {
                    url: window.location.pathname
                })
                .promise();

            setContent(content);
            setNotFound(!content);

            // if the page title is found, 
            // set the document title
            if (content?.data.title) {
                document.title = content.data.title
            }
        }

        fetchContent();
    }, [window.location.pathname]);

    // If no page is found, return 
    // a 404 page from your code.
    // The following hypothetical 
    // <FourOhFour> is placeholder.

    const builderEmbeddedRender = () => {
        if (notFound && !isPreviewingInBuilder) {
            return <span>404</span>;
        }

        // return the page when found
        return (
            <span>
                <BuilderComponent model="page" content={content} />
            </span>
        );
    };

    return (
        <div className="layout">
            <Sidebar />
            <div className="sandbox">
                <PageHeader>~/sandbox</PageHeader>
                <main>
                    {builderEmbeddedRender()}
                </main>
            </div>
        </div>
    )
}
