export default function CommentForm({ onSubmitComment, slug }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onSubmitComment(slug, data.message);

    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add a comment</legend>
        <label htmlFor="message">Message:</label>
        <input id="message" name="message" type="text" required />
      </fieldset>
      <button type="submit">Send</button>
    </form>
  );
}
