import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

import * as hootService from "../../services/hootService";

import styles from "./CommentForm.module.css";

const CommentForm = (props) => {
  const [formData, setFormData] = useState({ text: "" });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const navigate = useNavigate();

  // - Notice how we reset formData in our handleSubmit() function. This is an important step, as we don’t navigate the user away from this page when a new comment is submitted.
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (hootId && commentId) {
      hootService.updateComment(hootId, commentId, formData);
      navigate(`/hoots/${hootId}`);
    } else {
      props.handleAddComment(formData);
    }
    setFormData({ text: "" });
  };

  const { hootId, commentId } = useParams();
  console.log(hootId, commentId);

  useEffect(() => {
    const fetchHoot = async () => {
      const hootData = await hootService.show(hootId);
      // Find comment in fetched hoot data
      setFormData(
        hootData.comments.find((comment) => comment._id === commentId)
      );
    };
    if (hootId && commentId) fetchHoot();
  }, [hootId, commentId]);

  if (hootId && commentId)
    return (
      <main className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h1>Edit Comment</h1>
          <label htmlFor='text-input'>Your comment:</label>
          <textarea
            required
            type='text'
            name='text'
            id='text-input'
            value={formData.text}
            onChange={handleChange}
          />
          <button type='submit'>SUBMIT</button>
        </form>
      </main>
    );

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='text-input'>Your comment:</label>
      <textarea
        required
        type='text'
        name='text'
        id='text-input'
        value={formData.text}
        onChange={handleChange}
      />
      <button type='submit'>SUBMIT COMMENT</button>
    </form>
  );
};

export default CommentForm;
