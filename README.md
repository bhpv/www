# B.H. Photo and Videos

A clean, full-width Jekyll photography and video portfolio for `bhpv.ca`.

## Features

- Light gallery-white theme
- Primary accent color: `#a64686`
- Responsive masonry-style portfolio grid
- Click-to-enlarge in-page lightbox
- Filterable categories
- Jekyll data file for portfolio items
- SEO support with `jekyll-seo-tag`
- Sitemap generation with `jekyll-sitemap`
- Robots.txt with sitemap reference

## Local setup

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve
```

Open:

```text
http://localhost:4000
```

## Editing portfolio items

Portfolio images are managed in:

```text
_data/photos.yml
```

Each item supports:

- `title`
- `category`
- `category_label`
- `image`
- `large_image`
- `alt`

## SEO settings

Edit site-wide SEO values in:

```text
_config.yml
```

Important values:

```yaml
title: B.H. Photo and Videos
url: "https://bhpv.ca"
email: hello@example.com
```

The sitemap will be generated at:

```text
/sitemap.xml
```

## Deployment

This site can be deployed to GitHub Pages, Netlify, Cloudflare Pages, or any static host that supports Jekyll builds.
