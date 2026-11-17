/**
 * Turn a paragraph that contains only an image into a <figure> with a caption.
 *
 * Authoring in Markdown:
 *   ![Caption text](/images/x.jpg)                → full-width figure
 *   ![Caption text](/images/x.jpg "side")         → figure floated right (text wraps)
 *   ![Caption text](/images/x.jpg "side-left")    → figure floated left
 *
 * The caption comes from the Markdown title if it is not a placement keyword,
 * otherwise from the alt text.
 */

function walk(node, fn) {
  if (!node.children) return;
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    const replaced = fn(child, i, node);
    if (!replaced) walk(child, fn);
  }
}

export function rehypeFigures() {
  return (tree) => {
    walk(tree, (node, index, parent) => {
      if (node.type !== 'element' || node.tagName !== 'p') return false;

      const meaningful = node.children.filter(
        (child) => !(child.type === 'text' && child.value.trim() === '')
      );
      if (meaningful.length !== 1) return false;

      const img = meaningful[0];
      if (img.type !== 'element' || img.tagName !== 'img') return false;

      const properties = img.properties ?? {};
      const title = typeof properties.title === 'string' ? properties.title : '';
      const alt = typeof properties.alt === 'string' ? properties.alt : '';

      const isSideLeft = /side-left/.test(title);
      const isSide = !isSideLeft && /side/.test(title);
      const className = isSideLeft ? 'fig-side-left' : isSide ? 'fig-side' : null;

      const caption = title && !/side/.test(title) ? title : alt;

      properties.loading = 'lazy';
      properties.decoding = 'async';
      delete properties.title;

      const figure = {
        type: 'element',
        tagName: 'figure',
        properties: className ? { className: [className] } : {},
        children: [img],
      };

      if (caption) {
        figure.children.push({
          type: 'element',
          tagName: 'figcaption',
          properties: {},
          children: [{ type: 'text', value: caption }],
        });
      }

      parent.children[index] = figure;
      return true;
    });
  };
}
