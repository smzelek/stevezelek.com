import { h, JSX } from 'preact';
import Sidebar from 'src/components/sidebar/sidebar';
import 'src/global.scss';
import './loading.scss';
import PageHeader from 'src/components/page-header/page-header';

export default function Loading(): JSX.Element {
    return (
        <div className="layout">
            <Sidebar />
            <div className="loading-body">
                <PageHeader>~/...</PageHeader>
                <main>
                    <p>
                        loading...
                    </p>
                </main>
            </div>
        </div>
    )
}
