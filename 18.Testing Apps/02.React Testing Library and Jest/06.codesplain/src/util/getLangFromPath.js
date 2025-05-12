const languages = {
  javascript: ['js', 'jsx'],
  typescript: ['ts', 'tsx'],
  json: ['json'],
  markdown: ['md', 'markdown'],
  html: ['html'],
  go: ['go'],
  rust: ['rs'],
  shell: ['sh'],
  ruby: ['rb'],
};

export default function getLangFromFile(path) {
  let lang = 'javascript';
  for (let language in languages) {
    for (let ext of languages[language]) {
      if (path.endsWith(ext)) {
        lang = language;
      }
    }
  }
  return lang;
}
