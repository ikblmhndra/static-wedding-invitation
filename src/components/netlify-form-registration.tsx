export function NetlifyFormRegistration() {
  return (
    <form
      name="wedding-rsvp"
      method="POST"
      action="/thank-you/"
      data-netlify="true"
      netlify-honeypot="bot-field"
      hidden
      aria-hidden="true"
    >
      <input type="hidden" name="form-name" value="wedding-rsvp" />
      <input type="text" name="guestName" />
      <select name="attendance">
        <option value="Attending">Attending</option>
        <option value="Not attending">Not attending</option>
      </select>
      <input type="number" name="guestCount" />
      <textarea name="message" />
      <input type="text" name="bot-field" />
    </form>
  );
}
