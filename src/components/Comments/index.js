import { uid } from "uid";

export default function Comments({ comments }) {
  return (
    <section>
      <h3>Comments</h3>
      <ul>
        {comments &&
          comments.map((comment) => {
            return (
              <li key={uid()}>
                <p>{comment.text}</p>
                <p>
                  <span>Date: {comment.date},</span>
                  <span>Time: {comment.time}</span>
                </p>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
