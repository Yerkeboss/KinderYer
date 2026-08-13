import { useEffect } from 'react';

const SITE_NAME = 'Ерсән-Жәнай балабақшасы';

function upsertMeta(name, content) {
    if (!content) return;
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
}

export default function useSEO(title, description) {
    useEffect(() => {
        document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
        upsertMeta('description', description);
    }, [title, description]);
}
