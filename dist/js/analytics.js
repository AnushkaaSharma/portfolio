// Sends a named Umami event for every link click, so the dashboard shows
// what visitors actually open (resume, projects, socials, external links).
const projectNames = {
  'belly.html': 'Belly Foods',
  'wildfire.html': 'Campfire Verdict',
  'chatter.html': 'Chatter',
  'lalitpur.html': 'LMC Ward 10',
  'stripe.html': 'Stripe',
};

function eventFor(link) {
  const href = link.getAttribute('href') || '';
  const url = link.href;

  if (href.endsWith('.pdf')) return ['Resume', {}];
  if (href.startsWith('mailto:')) return ['Email', {}];
  if (url.includes('linkedin.com')) return ['LinkedIn', {}];
  if (url.includes('dribbble.com')) return ['Dribbble', {}];
  if (url.includes('github.com')) return ['GitHub', {}];
  if (url === 'https://medium.com/@sanushkaa4') return ['Medium', {}];

  const file = href.split('#')[0].split('/').pop();
  if (projectNames[file]) return ['Open project', { project: projectNames[file] }];

  if (link.hostname && link.hostname !== location.hostname) {
    return ['External link', { url }];
  }
  return null;
}

document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href]');
  if (!link || !window.umami) return;

  const event = eventFor(link);
  if (!event) return;

  const [name, data] = event;
  const page = location.pathname.split('/').pop() || 'index.html';
  window.umami.track(name, { ...data, from: page });
});
