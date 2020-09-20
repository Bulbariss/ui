const path = require("path");
module.exports = {
  siteMetadata: {
    siteTitle: `UI`,
    defaultTitle: `@bulbariss/ui`,
    siteTitleShort: `@bulbariss/ui`,
    siteDescription: `This is my take on React component libraries.`,
    siteUrl: `https://bulbariss.github.io/ui/`,
    siteAuthor: `@bulbariss`,
    siteImage: `src/images/card.jpg`,
    siteLanguage: `en`,
    themeColor: `#ECEFF4`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `@bulbariss/ui`,
        short_name: `@bulbariss/ui`,
        start_url: `/`,
        background_color: `#ECEFF4`,
        display: `standalone`,
        icon: `src/images/icon.svg`,
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`),
        ],
      },
    },

    `gatsby-plugin-styled-jsx`,
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        whitelistPatterns: [/sym-\d?\d/g],
        purgeOnly: [`src/css/style.css`],
        content: [
          path.join(process.cwd(), "src/**/!(*.d).{ts,js,jsx,tsx,md,mdx}"),
          path.join(process.cwd(), "node_modules/@bulbariss/ui/lib/index.js"),
        ],
      },
    },
  ],
};
