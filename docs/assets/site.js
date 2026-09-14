
(() => {
  const repoName = 'PlumpPad';
  const host = window.location.hostname.toLowerCase();
  let owner = null;
  if (host.endsWith('.github.io')) owner = host.slice(0, -'.github.io'.length);
  const base = owner
    ? `https://github.com/${encodeURIComponent(owner)}/${repoName}`
    : `https://github.com/search?q=${encodeURIComponent(repoName)}&type=repositories`;

  document.querySelectorAll('[data-repo-link]').forEach((link) => {
    const kind = link.dataset.repoLink;
    if (owner) {
      link.href = kind === 'issues-new' ? `${base}/issues/new`
        : kind === 'issues' ? `${base}/issues`
        : base;
    } else {
      link.href = base;
    }
  });

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
