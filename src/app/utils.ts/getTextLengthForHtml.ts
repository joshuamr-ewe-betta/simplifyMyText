import sanitizeHtml from 'sanitize-html';

export function getDataForHtml(htmlString: string): {
  length: number;
  text: string;
} {
  const tag = document.createElement('div');
  tag.style.position = 'absolute';
  tag.style.left = '-99in';
  tag.style.whiteSpace = 'nowrap';

  tag.innerHTML = sanitizeHtml(htmlString);

  document.body.appendChild(tag);
  const result = tag.innerText;
  const resultSplit = result.split(/\s+/);
  document.body.removeChild(tag);
  return { length: resultSplit.join(' ').length, text: result };
}
