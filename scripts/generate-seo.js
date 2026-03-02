
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENTS_FILE = path.join(__dirname, '../src/data/components.ts');
const INDEX_HTML = path.join(__dirname, '../index.html');
const SITEMAP_XML = path.join(__dirname, '../public/sitemap.xml');
const BASE_URL = 'https://mechone.obasi.tech'; // Replace with actual domain if known, or relative

function extractComponents() {
    try {
        const data = fs.readFileSync(COMPONENTS_FILE, 'utf8');
        const componentRegex = /"component_name":\s*"([^"]+)"/g;
        const typeRegex = /"component_type":\s*"([^"]+)"/g;

        const components = [];
        let match;

        // Simple regex extraction assuming standard formatting in components.ts
        // We'll iterate the file and try to pair names and types.
        // A more robust way would be to regex the entire object block, but let's try a simpler approach first 
        // since the file structure is known. 
        // Actually, distinct regexes might get out of sync.
        // Let's use a block regex.

        const blockRegex = /\{[^}]*"component_name":\s*"([^"]+)"[^}]*"component_type":\s*"([^"]+)"[^}]*\}/g;
        // The file might be large and complex, let's try to just find all component_names for keywords first.

        const names = [];
        while ((match = componentRegex.exec(data)) !== null) {
            names.push(match[1]);
        }

        const types = [];
        while ((match = typeRegex.exec(data)) !== null) {
            types.push(match[1]);
        }

        return { names, types };

    } catch (err) {
        console.error('Error reading components file:', err);
        return { names: [], types: [] };
    }
}

function updateIndexHtml(keywords) {
    try {
        let html = fs.readFileSync(INDEX_HTML, 'utf8');
        const keywordTagRegex = /<meta name="keywords" content="([^"]*)" \/>/;

        // Check if tag exists
        const match = html.match(keywordTagRegex);
        let currentKeywords = match ? match[1] : '';

        // Add new keywords if not present
        const uniqueKeywords = new Set([
            ...currentKeywords.split(',').map(k => k.trim()).filter(Boolean),
            ...keywords
        ]);

        const newKeywordsStr = Array.from(uniqueKeywords).join(', ');
        const newTag = `<meta name="keywords" content="${newKeywordsStr}" />`;

        if (match) {
            html = html.replace(keywordTagRegex, newTag);
        } else {
            // Insert after title if not found (fallback)
            html = html.replace('</title>', `</title>\n    ${newTag}`);
        }

        fs.writeFileSync(INDEX_HTML, html);
        console.log('Updated index.html with new keywords.');
    } catch (err) {
        console.error('Error updating index.html:', err);
    }
}

function generateSitemap(types) {
    const date = new Date().toISOString().split('T')[0];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${date}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/generator</loc>
    <lastmod>${date}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;

    types.forEach(type => {
        // Assuming the generator can take a query param or path for specific components
        // If not, we just point to generator, but SEO value comes from specific URLs usually.
        // For now, let's generate query-based URLs which Google can index.
        xml += `
  <url>
    <loc>${BASE_URL}/generator?component=${encodeURIComponent(type)}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });

    xml += `
</urlset>`;

    try {
        fs.writeFileSync(SITEMAP_XML, xml);
        console.log(`Generated sitemap.xml with ${types.length + 2} URLs.`);
    } catch (err) {
        console.error('Error writing sitemap.xml:', err);
    }
}

// Main execution
const { names, types } = extractComponents();
console.log(`Found ${names.length} components.`);

if (names.length > 0) {
    updateIndexHtml(names);
    generateSitemap(types);
}
