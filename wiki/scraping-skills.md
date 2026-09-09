# Scraping skills

Use these skills for source discovery and evidence collection. Do not install a skill unless the user selects it.

## Recommended

- [Web Scraping](https://skills.sh/jamditis/claude-skills-journalism/web-scraping): Use this for general research scraping and page evidence. The marketplace reports 6K installs. The source repository is [jamditis/claude-skills-journalism](https://github.com/jamditis/claude-skills-journalism).
- [Scrapy Web Scraping](https://skills.sh/mindrally/skills/scrapy-web-scraping): Use this for Python and Scrapy collection workflows. The marketplace reports 1.9K installs. The source repository is [Mindrally/skills](https://github.com/Mindrally/skills).
- [Crawl4AI](https://skills.sh/lancelin111/crawl4ai-skill/crawl4ai-skill): Use this for dynamic pages and supported login flows. The marketplace reports 943 installs. The source repository is [lancelin111/crawl4ai-skill](https://github.com/lancelin111/crawl4ai-skill).
- [Firecrawl](https://skills.sh/firecrawl/opencode-firecrawl/firecrawl): Use this for structured site extraction. The source repository is [firecrawl/opencode-firecrawl](https://github.com/firecrawl/opencode-firecrawl).
- [X/Twitter Scraper](https://skills.sh/github/awesome-copilot/x-twitter-scraper): Use this to trace X announcements to primary GitHub repositories. The source repository is [github/awesome-copilot](https://github.com/github/awesome-copilot).
- [Link Scraper](https://skills.sh/winsorllc/upgraded-carnival/link-scraper): Use this to extract and normalize links from catalog pages.

## Existing project skill

- Use `github-project-finder` for GitHub repository discovery, source verification, and evidence-backed collections. Combine it with a web-scraping skill when a catalog or social source does not expose direct GitHub links.

## Selection order

1. Use `github-project-finder` to query and verify GitHub repositories.
2. Use Web Scraping or Firecrawl to collect catalog and creator-page links.
3. Use X/Twitter Scraper only when a post is needed to trace a claim to a repository.
4. Save the evidence URL and source type for every verified game record.
