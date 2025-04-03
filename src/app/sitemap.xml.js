export async function GET() {
    const baseUrl = "https://alijanportfolios.vercel.app";
    const urls = ["/", "/about", "/projects", "/contact"]; // Add more pages if needed
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .map((url) => `<url><loc>${baseUrl}${url}</loc></url>`)
          .join("")}
      </urlset>`;
  
    return new Response(sitemap, {
      headers: { "Content-Type": "application/xml" },
    });
  }
  