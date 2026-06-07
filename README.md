# B.H. Photo and Videos

A Jekyll photography and videography portfolio for `bhpv.ca`.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Visit:

```text
http://localhost:4000
```

## SEO and sitemap

This site includes:

- `jekyll-seo-tag`
- `jekyll-sitemap`
- `robots.txt`
- Site URL configured as `https://bhpv.ca`

## Editing photos

Edit `_data/photos.yml` and add image files to `assets/images/`.

Each photo uses:

```yaml
- title: Example Title
  category: Travel
  image: /assets/images/example.jpg
```
