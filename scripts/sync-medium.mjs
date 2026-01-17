import Parser from 'rss-parser';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

const MEDIUM_FEED_URL = 'https://medium.com/feed/@vijeta004';
const OUTPUT_FILE = path.join(process.cwd(), 'src', 'data', 'medium-posts.json');

async function syncMediumPosts() {
    const parser = new Parser();
    try {
        console.log(`Fetching RSS feed from ${MEDIUM_FEED_URL}...`);
        const feed = await parser.parseURL(MEDIUM_FEED_URL);

        const posts = feed.items.map(item => {
            const $ = cheerio.load(item['content:encoded'] || item.content || '');

            // Extract the first image
            const image = $('img').first().attr('src') || '';

            // Extract the first paragraph text as description, ignoring headings and images
            let description = '';
            $('p').each((i, el) => {
                const text = $(el).text().trim();
                if (text && !description) {
                    description = text;
                }
            });

            // If no paragraph found, fallback to snippet or substring of content
            if (!description) {
                description = $.text().substring(0, 150) + '...';
            }

            // Truncate description if too long
            if (description.length > 150) {
                description = description.substring(0, 150) + '...';
            }

            return {
                title: item.title,
                link: item.link,
                pubDate: item.pubDate,
                image: image,
                description: description,
                categories: item.categories || []
            };
        });

        // Ensure directory exists
        const dir = path.dirname(OUTPUT_FILE);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        console.log(`Found ${posts.length} posts.`);
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
        console.log(`Saved posts to ${OUTPUT_FILE}`);

    } catch (error) {
        console.error('Error fetching Medium posts:', error);
        process.exit(1);
    }
}

syncMediumPosts();
