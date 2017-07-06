import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';

export default class extends React.Component {
    static async getInitialProps({ query }) {
        const { id } = query;
        const data = await fetch('http://localhost:8059/posts/' + id);
        const item = await data.json();
        return item;
    }
    render() {
        const { title, body } = this.props;
        return (
            <section>
                <h1>{ title }</h1>
                <p>{ body }</p>
                <Link href="/">Back to home</Link>
            </section>
        );
    }
}

