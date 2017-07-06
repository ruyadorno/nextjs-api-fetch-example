import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';

export default class extends React.Component {
    static async getInitialProps() {
        const data = await fetch('http://localhost:8059/posts');
        const items = await data.json();
        return {
            items
        };
    }
    render() {
        const { items } = this.props;
        return (
            <section>
                <h1>Node.js Server Side Render in the Age of APIs</h1>
                <ul>
                    { items.map(i => <li><Link href={ `/post?id=${i.id}` }>{ i.title }</Link></li>) }
                </ul>
            </section>
        );
    }
}

