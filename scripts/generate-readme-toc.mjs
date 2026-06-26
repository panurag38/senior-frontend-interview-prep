#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

function slug(text) {
  return text
    .toLowerCase()
    .replace(/^\d+\.\s*/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

const sectionRe = /<section id="([^"]+)">\s*\n<h2>([\s\S]*?)<\/h2>/g;
const sections = [];
let m;
while ((m = sectionRe.exec(html)) !== null) {
  const id = m[1];
  const title = m[2].replace(/<[^>]+>/g, '').trim();
  const block = html.slice(m.index, html.indexOf('</section>', m.index) + 10);
  const questions = [...block.matchAll(/<summary>([^<]+)/g)].map((q) => q[1].trim());
  sections.push({ id, title, questions });
}

let md = `# Senior Frontend Interview Prep

> **516 interview questions** for senior/staff frontend loops — system design, React, micro-frontends, browser internals, and more.  
> Styled as an interactive guide (expand each question). Inspired by [javascript-interview-questions](https://github.com/sudheerj/javascript-interview-questions).

## Quick links

| | |
|---|---|
| **Open guide** | [index.html](./index.html) (local) · [GitHub Pages](https://YOUR_USERNAME.github.io/senior-frontend-interview-prep/) after deploy |
| **Micro-frontends** | [index.html#mfe](./index.html#mfe) |
| **System design** | [index.html#sysdesign](./index.html#sysdesign) |

Each answer includes **Reasoning → Example → Trade-offs**, production examples (Netflix, Amazon, Flipkart, Myntra, Walmart, Instagram, X), and follow-up Q&A.

---

## Table of contents

`;

for (const s of sections) {
  md += `\n### [${s.title}](./index.html#${s.id}) (${s.questions.length})\n\n`;
  md += `| # | Question |\n|---|----------|\n`;
  s.questions.forEach((q, i) => {
    const anchor = `${s.id}-${slug(q)}`;
    md += `| ${i + 1} | [${q.replace(/\|/g, '\\|')}](./index.html#${anchor}) |\n`;
  });
  md += '\n';
}

md += `---

## Local preview

\`\`\`bash
npx serve .
# open http://localhost:3000
\`\`\`

## GitHub Pages

Push to \`main\`. Workflow deploys \`index.html\` automatically. Set repo **Settings → Pages → Source: GitHub Actions**.

## License

MIT — use freely for interview prep.
`;

fs.writeFileSync(path.join(root, 'README.md'), md);
console.log('README.md generated:', sections.length, 'sections');
