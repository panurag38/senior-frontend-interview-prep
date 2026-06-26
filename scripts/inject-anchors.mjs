#!/usr/bin/env node
/** Add id anchors to each <details> for README deep links (sudheerj-style) */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const htmlPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '../index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

function slug(text) {
  return text
    .toLowerCase()
    .replace(/^\d+\.\s*/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

html = html.replace(
  /<section id="([^"]+)">([\s\S]*?)<\/section>/g,
  (sectionBlock, sectionId, inner) => {
    const updated = inner.replace(
      /<details><summary>([^<]+)<\/summary>/g,
      (_, summary) => {
        const id = `${sectionId}-${slug(summary)}`;
        return `<details id="${id}"><summary>${summary}</summary>`;
      }
    );
    return `<section id="${sectionId}">${updated}</section>`;
  }
);

html = html.replace(
  '<title>Senior Frontend Interview Prep — System Design &amp; FE Engineering</title>',
  '<title>Senior Frontend Interview Prep — 516 Q&amp;A</title>'
);

fs.writeFileSync(htmlPath, html);
const count = (html.match(/<details id="/g) || []).length;
console.log('Anchors added:', count);
