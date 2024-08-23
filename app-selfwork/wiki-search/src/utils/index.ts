export const stripHTMLTags = (str: string) => str.replace(/<[^>]*>/g, "");

export const ParseXmlStringToDomElement = (xmlString: string) => {
  const div = document.createElement("div");
  div.innerHTML = xmlString;

  return div.firstChild;
};
