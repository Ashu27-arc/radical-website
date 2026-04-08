/**
 * Transforms [wpforms id="123"] shortcodes into responsive iframe embeds.
 * Supports variations like [wpforms id=123] or [wpforms id='123'].
 */
export function replaceWpForms(content: string): string {
  if (!content) return '';

  return content.replace(/\[wpforms\s+id=["']?(\d+)["']?\]/g, (_, formId) => {
    return `
      <div class="wpforms-container" style="margin: 2rem 0; clear: both; width: 100%;">
        <iframe 
          src="https://backup.radicaleducation.in/wpforms/view/${formId}" 
          style="border: none; width: 100%; min-height: 650px; overflow: hidden;"
          loading="lazy"
          allow="payment; clipboard-write; camera; microphone"
          title="WordPress Form ${formId}"
        ></iframe>
      </div>
    `;
  });
}