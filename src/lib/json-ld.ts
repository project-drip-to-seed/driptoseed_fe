// JSON for an inline <script type="application/ld+json"> block.
//
// JSON.stringify leaves "<" alone, so a value containing "</script>" would end the script tag early and let the
// rest run as HTML. Escaping "<" (and the two line separators JavaScript treats as newlines) makes that
// impossible, whatever ends up in the data later. The result is still valid JSON.
export function jsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
