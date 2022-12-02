import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "PageTitle",
    description: "asdf",
    site: "https://my-site.com",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>en-us</language>`,
  });
