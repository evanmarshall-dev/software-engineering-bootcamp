// ---------------------------------------
// NOTES:
// - Our ‘Details’ page will be represented by a new HootDetails component. This component will be responsible for rendering the details of a single hoot, including its associated comments. This component will be displayed whenever a user clicks on a hoot from the ‘List’ page.
// - Rendering details on a specific hoot will require a new service function to fetch a single hoot from our back-end app. For the service function to work, we’ll need to provide it with a hoot._id so it can make the request to the correct route.
// - Our HootDetails component will hold hoot state locally. This differs from the HootList component, which receives the data it displays (hoots) as a prop.
// ---------------------------------------

// ----------------------------------------
// USEPARAMS:
// - When a user navigates to the HootDetails page, we’ll need to fetch() details on that hoot. An individual hoot can be identified by its ObjectId, with this value being accessible through the hootId parameter as defined in the <Route> above.
// - If hootId is our parameter, you might wonder where we passed in our argument. Recall the <Link> we wrapped around our hoot cards. We gave it a to property set to /hoots/${hoot._id}.
// - The _id is being passed in the HootList.jsx file as: <Link key={hoot._id} to={`/hoots/${hoot._id}`}>. To extract this value for use in our component, we’ll use the useParams() hook.
// - Now that we have the hootId, we should be able to retrieve details for that hoot from the back-end app using a new service function.
// ----------------------------------------

// ----------------------------------------
// COMMENTS:
// - To display the comments associated with a hoot, we’ll want to map() over hoot.comments and produce a list of <article> tags.
// - Each comment’s <article> tag should include a few things:
//   - The username of the comment’s author.
//   - The createdAt date property of the comment.
//   - The text content of the comment.
// - Regarding the author property of a comment, you might recall that our show controller on the back-end is already populating the author information for each comment
// - In our comments section, we’ll also want to include a condition that displays a message if there are not yet any comments embedded within the hoot.
// ----------------------------------------

// - Next up, we’ll call the service, and store the response from the server in state.
import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router";

import CommentForm from "../CommentForm/CommentForm";

import * as hootService from "../../services/hootService";

import { UserContext } from "../../contexts/UserContext";

import styles from "./HootDetails.module.css";

const HootDetails = (props) => {
  // - Be sure to destructure the hootId when calling useParams()!
  const { hootId } = useParams();
  // Access the user object from the UserContext
  const { user } = useContext(UserContext);
  // - Giving the hoot state an initial value of null will simplify some conditional rendering that we will implement shortly.
  const [hoot, setHoot] = useState(null);
  // - Confirm that you can access the hootId in the HootDetails component.
  // ? console.log("hootId", hootId);
  // Verify the hoot state is set correctly:
  // ? console.log("hoot state:", hoot);

  useEffect(() => {
    const fetchHoot = async () => {
      const hootData = await hootService.show(hootId);
      setHoot(hootData);
    };
    fetchHoot();
    // - Remember to include hootId in the dependency array of your useEffect(). This tells the useEffect() to fire off whenever the value of the hootId changes.
  }, [hootId]);

  const handleAddComment = async (commentFormData) => {
    // ? console.log("commentFormData", commentFormData);
    const newComment = await hootService.createComment(hootId, commentFormData);
    setHoot({ ...hoot, comments: [...hoot.comments, newComment] });
  };

  const handleDeleteComment = async (commentId) => {
    console.log("commentId:", commentId);
    // Eventually, the service function will be called here
    setHoot({
      ...hoot,
      comments: hoot.comments.filter((comment) => comment._id !== commentId),
    });
  };

  // - If you included the console.log() in the step above, you might notice that the hoot state is null when the component first mounts. This can cause issues if we try to render data that is not there. Let’s add a condition to account for that.
  return (
    <>
      {hoot ? (
        <main className={styles.container}>
          <section>
            <header>
              <p>{hoot.category.toUpperCase()}</p>
              <h1>{hoot.title}</h1>
              <div>
                <p>
                  {`${hoot.author.username} posted on
            ${new Date(hoot.createdAt).toLocaleDateString()}`}
                </p>
                {/* Add the following */}
                {hoot.author._id === user._id && (
                  <>
                    {/* Add a new Link */}
                    <Link to={`/hoots/${hootId}/edit`}>Edit</Link>
                    {/* Modify the button */}
                    <button onClick={() => props.handleDeleteHoot(hootId)}>
                      Delete
                    </button>
                  </>
                )}
              </div>
            </header>
            <p>{hoot.text}</p>
          </section>
          {/* - Notice the <section> tag at the bottom. This will act as our ‘Comments’ section. The commentSchema is embedded within hootSchema, so the relevant comment data should already exist within this component’s hoot state. */}
          <section>
            <h2>Comments</h2>
            {/* Pass the handleAddComment function to the CommentForm Component */}
            {/* Make use of the CommentForm component */}
            <CommentForm handleAddComment={handleAddComment} />

            {/* Check if there are no comments */}
            {!hoot.comments.length && <p>There are no comments.</p>}

            {hoot.comments.map((comment) => (
              <article key={comment._id}>
                <header>
                  <div>
                    <p>
                      {`${comment.author.username} posted on
                ${new Date(comment.createdAt).toLocaleDateString()}`}
                    </p>
                    {user && comment.author._id === user._id && (
                      <>
                        <Link
                          to={`/hoots/${hootId}/comments/${comment._id}/edit`}>
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDeleteComment(comment._id)}
                          aria-label={`Delete comment by ${comment.author.username}`}>
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </header>
                <p>{comment.text}</p>
              </article>
            ))}
          </section>
        </main>
      ) : (
        <main className={styles.container}>Loading...</main>
      )}
    </>
  );
};

export default HootDetails;
