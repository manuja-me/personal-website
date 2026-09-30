import { siteConfig } from '../data/site';

export const prerender = true;

export async function GET() {
  const content = `Contact: mailto:${siteConfig.email}
Expires: 2027-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: ${siteConfig.url}/.well-known/security.txt
Policy: ${siteConfig.url}/#contact
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
