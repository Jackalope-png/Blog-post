'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
// import RootLayout from './layout';

export default function Home2() {
    const router = useRouter();
    const pathname = usePathname();
    const id = pathname.split('/').pop();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {

            if (!id) return;
            try {
                const response = await fetch(`https://dev.to/api/articles/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setArticle(data);
            } 
            catch (error) {
                console.error('Error fetching article:', error);
                setArticle(null); 
            }
        };

        fetchArticle();
    }, [id]);

    if (!article) return <p>Loading...</p>;

    return (
        <div>
            <h1>{article.title}</h1>
            <p><strong>Published on:</strong> {article.readable_publish_date}</p>
            <img src={article.cover_image} alt={article.title} style={{ maxWidth: "100%", height: "auto" }} />
            <div dangerouslySetInnerHTML={{ __html: article.body_html }} />
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
    );
}