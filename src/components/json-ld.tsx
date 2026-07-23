/**
 * Renders a schema.org JSON-LD script tag from a plain object.
 * Usage: <JsonLd schema={{ '@context': 'https://schema.org', ... }} />
 */
export function JsonLd({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
