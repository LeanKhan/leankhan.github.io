// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable the Preact renderer to support Preact JSX components.
  renderers: ["@astrojs/renderer-preact"],
  markdownOptions: {
    render: [
		'@astrojs/markdown-remark',
      {
        rehypePlugins: [
          [
            "rehype-external-links",
            {
              content: {
                type: "element",
                tagName: "img",
                properties: {
                  src: "/assets/feather-external-link.svg",
                  alt: "External link icon",
                },
                children: [],
              },
              contentProperties: { className: ["external-link-icon"] },
            },
          ],
        ],
      },
    ],
  },
});
