export const prerender = true;

export async function GET() {
  const content = `Contact: mailto:manuja.public@gmail.com
Expires: 2027-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: https://manuja.dev/.well-known/security.txt
Policy: https://manuja.dev/#contact
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
