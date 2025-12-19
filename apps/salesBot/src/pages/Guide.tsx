// TODO: Demo only – remove this component when used in actual implementation

const Guides = () => {
  return (
    <div className="mx-auto">
      {/* Section 1 */}
      <div>
        <h2 className="text-base font-semibold mb-2">
          📘 WhatsApp Template Creation — Rules & Regulations
        </h2>
        <p className="text-gray-700 text-sm mb-3">
          This document outlines the standards and validation requirements for
          creating WhatsApp Message Templates according to Meta Business API
          policies.
        </p>
        <hr className="my-4 border-gray-300" />
      </div>

      {/* Section 2: General Rules */}
      <div>
        <h2 className="text-base font-semibold mb-2">
          ⚙️ General Template Rules
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>
            <b>Name:</b> Must be lowercase, alphanumeric, and use underscores
            only. Example: <code>order_update</code> (❌ not{" "}
            <code>OrderUpdate</code> or <code>order update</code>).
          </li>
          <li>
            <b>Category:</b> Allowed values are <code>MARKETING</code> or{" "}
            <code>UTILITY</code>.
          </li>
          <li>
            <b>Language Code:</b> Must follow ISO 639-1 format, e.g.{" "}
            <code>en</code>, <code>hi</code>, <code>es</code>.
          </li>
          <li>
            <b>Components Allowed:</b> Each template must include a <b>BODY</b>.
            Optional: <b>HEADER</b>, <b>FOOTER</b>, and <b>BUTTONS</b>.
          </li>
          <li>
            <b>Placeholders:</b> Use sequential variables like{" "}
            <code>{"{{1}}"}</code>, <code>{"{{2}}"}</code>, etc. You cannot skip
            numbers (❌ <code>{"{{1}}"}</code> and <code>{"{{3}}"}</code>{" "}
            without <code>{"{{2}}"}</code>).
          </li>
          <li>
            <b>No Unsupported Characters:</b> Avoid more than 10 emojis or
            invisible characters (e.g. zero-width space).
          </li>
        </ul>
        <hr className="my-4 border-gray-300" />
      </div>

      {/* Section 3: Header Component */}
      <div>
        <h2 className="text-base font-semibold mb-2">🧩 HEADER Component</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>Optional component.</li>
          <li>
            <b>Allowed Formats:</b> <code>TEXT</code>, <code>IMAGE</code>,{" "}
            <code>VIDEO</code>, or <code>DOCUMENT</code>.
          </li>
          <li>
            <b>TEXT Limit:</b> Up to 60 characters.
          </li>
          <li>
            <b>Variable Placeholders:</b> Only one (<code>{"{{1}}"}</code>)
            allowed if using dynamic data.
          </li>
          <li>Cannot mix formats (e.g., text and image together).</li>
        </ul>
        <hr className="my-4 border-gray-300" />
      </div>

      {/* Section 4: Body Component */}
      <div>
        <h2 className="text-base font-semibold mb-2">📄 BODY Component</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>
            ✅ <b>Required</b> — mandatory component.
          </li>
          <li>
            <b>Character Limit:</b> Up to 1024 characters.
          </li>
          <li>
            <b>Newlines:</b> Maximum 2 consecutive newlines allowed.
          </li>
          <li>
            <b>Placeholders:</b> Sequential only — <code>{"{{1}}"}</code>,{" "}
            <code>{"{{2}}"}</code>...
          </li>
          <li>
            <b>Only Parameters?</b> ❌ Not allowed — must include some static
            text.
          </li>
          <li>
            <b>Emoji Limit:</b> Maximum 10 emojis.
          </li>
          <li>
            <b>Formatting:</b> Supports text and variables only (no HTML or
            Markdown).
          </li>
        </ul>

        <div className="bg-gray-100 p-3 rounded-lg mt-2 text-sm">
          ✅ Example:{" "}
          <code>
            Hello {"{{1}}"}, your order {"{{2}}"} has been shipped.
          </code>
          <br />⛔ Invalid: <code>{"{{1}} {{2}}"}</code> (only placeholders, no
          static text)
        </div>
        <hr className="my-4 border-gray-300" />
      </div>

      {/* Section 5: Footer Component */}
      <div>
        <h2 className="text-base font-semibold mb-2">🦶 FOOTER Component</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>Optional component.</li>
          <li>
            <b>Character Limit:</b> Up to 60 characters.
          </li>
          <li>
            <b>Placeholders:</b> ❌ Not allowed — must be static text.
          </li>
          <li>
            <b>Usage:</b> Commonly for legal notes, unsubscribe text, or
            disclaimers.
          </li>
        </ul>

        <div className="bg-gray-100 p-3 rounded-lg mt-2 text-sm">
          ✅ Example:{" "}
          <code>Thank you for choosing QuantumBot Private Limited!</code>
        </div>
        <hr className="my-4 border-gray-300" />
      </div>

      {/* Section 6: Buttons Component */}
      <div>
        <h2 className="text-base font-semibold mb-2">🔘 BUTTONS Component</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>Optional component.</li>
          <li>
            <b>Total Buttons Allowed:</b> Maximum 3 per template.
          </li>
          <li>
            <b>Allowed Types:</b> <code>QUICK_REPLY</code>, <code>URL</code>,{" "}
            <code>PHONE_NUMBER</code>
          </li>
          <li>
            <b>Mixed Buttons:</b> You can mix types but still max 3 total.
          </li>
          <li>
            <b>Text Limit per Button:</b> 20 characters.
          </li>
        </ul>
        <hr className="my-4 border-gray-300" />
      </div>

      {/* Section 7: QUICK_REPLY */}
      <div>
        <h2 className="text-base font-semibold mb-2">💬 QUICK_REPLY Buttons</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>Maximum 3 allowed.</li>
          <li>Each must have unique text.</li>
          <li>Action: Sends button text back to the business.</li>
        </ul>
        <hr className="my-4 border-gray-300" />
      </div>

      {/* Section 8: URL Buttons */}
      <div>
        <h2 className="text-base font-semibold mb-2">🌐 URL Buttons</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>Maximum 2 allowed.</li>
          <li>Each must have unique text.</li>
          <li>
            URL must begin with <code>https://</code> or <code>http://</code>.
          </li>
        </ul>
        <hr className="my-4 border-gray-300" />
      </div>

      {/* Section 9: Phone Number Buttons */}
      <div>
        <h2 className="text-base font-semibold mb-2">
          📞 PHONE_NUMBER Buttons
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>Maximum 1 allowed.</li>
          <li>
            Must be in international format (e.g., <code>+919876543210</code> or{" "}
            <code>91987654321</code>).
          </li>
        </ul>
        <hr className="my-4 border-gray-300" />
      </div>

      {/* Section 10: Rejection Reasons */}
      <div>
        <h2 className="text-base font-semibold mb-2">
          ⚠️ Template Rejection Reasons
        </h2>
        <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm">
          <li>
            Contain only placeholders or excessive blank lines in the body.
          </li>
          <li>Exceed 10 emojis or 2 consecutive newlines.</li>
          <li>Use duplicate button texts for URL or QUICK_REPLY types.</li>
          <li>
            Skip placeholder numbering (e.g., {"{{1}}"}, {"{{3}}"}).
          </li>
          <li>
            Contain promotional/misleading content in non-MARKETING templates.
          </li>
          <li>Reference invalid or missing media files in headers.</li>
        </ol>
      </div>
    </div>
  );
};

export default Guides;
