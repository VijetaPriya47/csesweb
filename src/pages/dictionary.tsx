import React from 'react';
import Layout from '@theme/Layout';
import { DictionaryManager } from '../components/Dictionary/DictionaryManager';

export default function DictionaryPage(): JSX.Element {
    return (
        <Layout
            title="Dictionary"
            description="My personal dictionary of tech terms and concepts">
            <main className="container margin-vert--lg">
                <div className="text--center margin-bottom--lg">
                    <h1>Dictionary</h1>
                    <p>A collection of definitions and concepts.</p>
                </div>
                <DictionaryManager />
            </main>
        </Layout>
    );
}
