# Docket 🚀

📖 Simple | 🛠️ Functional | ✨ Elegant | 💥 Powerful | 🎨 Stylish | 📱 Responsive

![docket](https://raw.githubusercontent.com/refactorian/docket/main/images/screenshot.png)

Docket - Hugo Documentation Theme | [Live Preview](https://refactorian.github.io/docket)

Introducing Docket, your ultimate companion for creating exceptional documentation with ease. Built upon the solid foundation of the [Book](https://github.com/alex-shpak/hugo-book) theme, Docket combines sleek design with robust functionality, ensuring that your documentation projects stand out from the crowd. This awesome theme is tailored specifically for Hugo, ensuring seamless integration and optimal performance.

Our goal? To enrich your documentation experience with more features and customization options, empowering you to tailor your content to perfection. Whether you're creating technical guides, tutorials, or project documentation, Docket streamlines the process, allowing your content to shine effortlessly. Simplify your documentation journey and unlock the full potential of your content with Docket, your trusted companion for crafting exceptional documentation.

## Features

- **No Initial Setup Required**: Jump right in without any setup hassles.
- **Simple Design with Clean Interface**: Enjoy a clutter-free, easy-to-use design.
- **Mobile-Friendly and Lightweight**: Access your content seamlessly on any device with swift loading times.
- **Multi-Language Support**: Reach a broader audience with support for multiple languages.
- **JavaScript-Free Primary Features**: Experience core functionalities without relying on JavaScript.
- **Customize to Your Preferences**: Tailor your experience with customizable options.
- **Convenient Shortcodes**: Effortlessly enhance your content with handy shortcodes.
- **Engage with Comments**: Interact with your audience through comments.
- **Easy Blogging and Organization**: Manage your blog and categories with simplicity.
- **Switch to Dark Mode**: Optimize your viewing experience with a sleek dark mode.

## Requirements

- Hugo v0.112.0 or higher, [Installation Instructions](https://gohugo.io/installation/)

## Installation

### Install as git submodule
Navigate to your hugo project root and run:

```
git submodule add https://github.com/refactorian/docket themes/docket
```

### Create from a template

https://github.com/refactorian/docketize

## Configuration

### Site Configuration

There are a few configuration options that you can add to your `config.toml` file.  
You can also see the `yaml` example [here](https://github.com/refactorian/docket/blob/main/exampleSite/config.yaml).

```toml
# (Optional) Set Google Analytics if you use it to track your website.
# Always put it on the top of the configuration file, otherwise it won't work
googleAnalytics = "UA-XXXXXXXXX-X"

# (Optional) If you provide a Disqus shortname, comments will be enabled on
# all pages.
disqusShortname = "my-site"

# (Optional) Set this to true if you use capital letters in file names
disablePathToLower = true

# (Optional) Set this to true to enable 'Last Modified by' date and git author
#  information on 'doc' type pages.
enableGitInfo = true

# (Optional) Theme is intended for documentation use, therefore it doesn't render taxonomy.
# You can remove related files with config below
disableKinds = ['taxonomy', 'taxonomyTerm']

[params]
  # (Optional, default dark) Sets color theme: light or dark.
  BookTheme = 'dark'

  # (Optional, default true) Controls table of contents visibility on right side of pages.
  # Start and end levels can be controlled with markup.tableOfContents setting.
  # You can also specify this parameter per page in front matter.
  BookToC = true

  # (Optional, default none) Set the path to a logo for the book. If the logo is
  # /static/logo.png then the path would be 'logo.png'
  BookLogo = 'logo.png'

  # (Optional, default none) Set leaf bundle to render as side menu
  # When not specified file structure and weights will be used
  # Deprecated, to be removed in June 2022
  BookMenuBundle = '/menu'

  # (Optional, default docs) Specify section of content to render as menu
  # You can also set value to "*" to render all sections to menu
  BookSection = 'docs'

  # Set source repository location.
  # Used for 'Last Modified' and 'Edit this page' links.
  BookRepo = 'https://github.com/refactorian/docket'

  # Specifies commit portion of the link to the page's last modified commit hash for 'doc' page
  # type.
  # Required if 'BookRepo' param is set.
  # Value used to construct a URL consisting of BookRepo/BookCommitPath/<commit-hash>
  # Github uses 'commit', Bitbucket uses 'commits'
  BookCommitPath = 'commit'

  # Enable 'Edit this page' links for 'doc' page type.
  # Disabled by default. Uncomment to enable. Requires 'BookRepo' param.
  # Path must point to the site directory.
  BookEditPath = 'edit/main/exampleSite'

  # (Optional, default January 2, 2006) Configure the date format used on the pages
  # - In git information
  # - In blog posts
  BookDateFormat = 'Jan 2, 2006'

  # (Optional, default true) Enables search function with flexsearch,
  # Index is built on fly, therefore it might slowdown your website.
  # Configuration for indexing can be adjusted in i18n folder per language.
  BookSearch = true

  # (Optional, default true) Enables comments template on pages
  # By default partials/docs/comments.html includes Disqus template
  # See https://gohugo.io/content-management/comments/#configure-disqus
  # Can be overwritten by same param in page frontmatter
  BookComments = true

  # /!\ This is an experimental feature, might be removed or changed at any time
  # (Optional, experimental, default false) Enables portable links and link checks in markdown pages.
  # Portable links meant to work with text editors and let you write markdown without {{< relref >}} shortcode
  # Theme will print warning if page referenced in markdown does not exists.
  BookPortableLinks = true

  # /!\ This is an experimental feature, might be removed or changed at any time
  # (Optional, experimental, default false) Enables service worker that caches visited pages and resources for offline use.
  BookServiceWorker = true
```

### Multi-Language Support

Theme supports Hugo's [multilingual mode](https://gohugo.io/content-management/multilingual/), just follow configuration guide there. You can also tweak search indexing configuration per language in `i18n` folder.

### Page Configuration

You can specify additional params in the front matter of individual pages:

```toml
# Set type to 'docs' if you want to render page outside of configured section or if you render section other than 'docs'
type = 'docs'

# Set page weight to re-arrange items in file-tree menu (if BookMenuBundle not set)
weight = 10

# (Optional) Set to 'true' to mark page as flat section in file-tree menu (if BookMenuBundle not set)
bookFlatSection = false

# (Optional) Set to hide nested sections or pages at that level. Works only with file-tree menu mode
bookCollapseSection = true

# (Optional) Set true to hide page or section from side menu (if BookMenuBundle not set)
bookHidden = false

# (Optional) Set 'false' to hide ToC from page
bookToC = true

# (Optional) If you have enabled BookComments for the site, you can disable it for specific pages.
bookComments = true

# (Optional) Set to 'false' to exclude page from search index.
bookSearchExclude = true

# (Optional) Set explicit href attribute for this page in a menu (if BookMenuBundle not set)
bookHref = ''
```

### Partials

There are layout partials available for you to easily override components of the theme in `layouts/partials/`.

In addition to this, there are several empty partials you can override to easily add/inject code.

| Empty Partial                                      | Placement                                   |
| -------------------------------------------------- | ------------------------------------------- |
| `layouts/partials/docs/inject/head.html`           | Before closing `<head>` tag                 |
| `layouts/partials/docs/inject/body.html`           | Before closing `<body>` tag                 |
| `layouts/partials/docs/inject/footer.html`         | After page footer content                   |
| `layouts/partials/docs/inject/menu-before.html`    | At the beginning of `<nav>` menu block      |
| `layouts/partials/docs/inject/menu-after.html`     | At the end of `<nav>` menu block            |
| `layouts/partials/docs/inject/content-before.html` | Before page content                         |
| `layouts/partials/docs/inject/content-after.html`  | After page content                          |
| `layouts/partials/docs/inject/toc-before.html`     | At the beginning of table of contents block |
| `layouts/partials/docs/inject/toc-after.html`      | At the end of table of contents block       |

### Extra Customisation

| File                     | Description                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------- |
| `static/favicon.png`     | Override default favicon                                                              |
| `assets/_custom.scss`    | Customise or override scss styles                                                     |
| `assets/_variables.scss` | Override default SCSS variables                                                       |
| `assets/_fonts.scss`     | Replace default font with custom fonts (e.g. local files or remote like google fonts) |
| `assets/mermaid.json`    | Replace Mermaid initialization config                                                 |

### Plugins

There are a few features implemented as pluggable `scss` styles. Usually these are features that don't make it to the core but can still be useful.

| Plugin                            | Description                                                 |
| --------------------------------- | ----------------------------------------------------------- |
| `assets/plugins/_numbered.scss`   | Makes headings in markdown numbered, e.g. `1.1`, `1.2`      |
| `assets/plugins/_scrollbars.scss` | Overrides scrollbar styles to look similar across platforms |

To enable plugins, add `@import "plugins/{name}";` to `assets/_custom.scss` in your website root.

### Hugo Internal Templates

There are a few hugo templates inserted in `<head>`

- [Google Analytics](https://gohugo.io/templates/internal/#google-analytics)
- [Open Graph](https://gohugo.io/templates/internal/#open-graph)

To disable Open Graph inclusion you can create your own empty file `\layouts\_internal\opengraph.html`.
In fact almost empty not quite empty because an empty file looks like absent for HUGO. For example:
```
<!-- -->
```

## Shortcodes

- [Buttons](https://refactorian.github.io/docket/docs/shortcodes/buttons/)
- [Columns](https://refactorian.github.io/docket/docs/shortcodes/columns/)
- [Details](https://refactorian.github.io/docket/docs/shortcodes/details/)
- [Hints](https://refactorian.github.io/docket/docs/shortcodes/hints/)
- [KaTeX](https://refactorian.github.io/docket/docs/shortcodes/katex/)
- [Mermaid](https://refactorian.github.io/docket/docs/shortcodes/mermaid/)
- [Tabs](https://refactorian.github.io/docket/docs/shortcodes/tabs/)

By default, Goldmark trims unsafe outputs which might prevent some shortcodes from rendering. It is recommended to set `markup.goldmark.renderer.unsafe=true` if you encounter problems.

```toml
[markup.goldmark.renderer]
  unsafe = true
```

If you are using `config.yaml` or `config.json`, consult the [configuration markup](https://gohugo.io/getting-started/configuration-markup/)

## Versioning

This theme follows a simple incremental versioning. e.g. `v1.0`, `v2.0` and so on. There might be breaking changes between versions.

If you want lower maintenance, use one of the released versions. If you want to live on the bleeding edge of changes, you can use the `main` branch and update your website when needed.

## Contributing

Docket is expected to evolve over time. I intend to keep adding features and making changes as required. 

Feel free to get in touch with any issues or suggestions for new features you'd like to see.

- 🐞 **Bug reports & issues:** Use [GitHub Issues](https://github.com/refactorian/docket/issues)
- 💡 **Ideas for new features:** Open a discussion on [GitHub Discussions](https://github.com/refactorian/docket/discussions)
- 🙋 **General questions:** Head to [GitHub Discussions](https://github.com/refactorian/docket/discussions)

## License

[MIT License](https://github.com/refactorian/docket/blob/main/LICENSE)
