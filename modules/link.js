const linkPreviewGenerator = require("link-preview-generator");
const urlExists = require("url-exists");
const stripHtml = require("string-strip-html");

async function linkPreview(link, message, io) {
  urlExists(link, async function(err, exists) {
    if (exists) {
      const preview = await linkPreviewGenerator(link).catch(console.error);
      if (preview) {
        io.emit("linkPreview", {
          link: link,
          message: message,
          title: stripHtml(preview.title || ""),
          description: stripHtml(preview.description || ""),
          domain: stripHtml(preview.domain || ""),
          img: stripHtml(preview.img || "")
        });
      }
    }
  });
}

async function messageToLink(link, io) {
  let message = link;
  if (link.includes("</a>")) {
    let links = link.split('"');
    links = links.filter(
      link =>
        link.includes("http") && !link.includes("</a>") && !link.includes("<a")
    );
    linkPreview(links[0], message, io);
  }
}
// linkPreview(
//   `http:// <a href="http://youtube.com" >youtube.com</a> http:// <a href="http://youtube.com" >youtube.com</a>`,
//   0
// );

module.exports = {
  linkPreview,
  messageToLink
};
