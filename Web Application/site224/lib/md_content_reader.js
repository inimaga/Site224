import { marked } from 'marked';

export async function getPost(url) {
    const source = await fetch(url).then(res => res.text());
    const html = marked(source);
    return {
        body: html,
    };
}