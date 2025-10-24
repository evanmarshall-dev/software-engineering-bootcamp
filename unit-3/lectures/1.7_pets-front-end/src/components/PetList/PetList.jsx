// --------------------------------
// NOTES:
// --------------------------------
// - In PetList.jsx, create a new function component called PetList. Make sure it accepts props as an argument. For now, it will log props and return an h1 element wrapped in a div.
// - Let’s import the PetList component into App.jsx. Then, inside the return statement of App.jsx, render it!
// - Inside the return statement of PetList.jsx, create a ul element inside the existing empty div element. Render the list of pets inside the ul.
// - Each <li> element will display the name property of each pet in pets. React will also insist that each top-level element in a list must have a unique key - fortunately, MongoDB generates an ID (as _id) for us when creating a resource, so we can use pet._id for the key.
// - Test it out in the browser and make sure you see the list of pets.
// - Finally, let’s handle the case where there are no pets to display.
// - This can be handled with a ternary operator, checking to see if the pets array has a length of 0. If so, we display a message that there are no pets to display, and if not, we instead display the list of pets.

// --------------------------------
// READ A SINGLE PET:
// --------------------------------
// - As with the index section, let’s review the minimum requirements for showing a single pet.
// - Add a link to view the details of a single pet.
// - Conditionally render the details of a single pet.
// - Inside PetList.jsx, where you .map() over the pets, we want to indicate to the user that a pet can be clicked on. We’ll give it some inline styling to help accomplish this.
// - Next, add an onClick event to the li element. For testing purposes, let’s add an inline function that logs the clicked pet to the console.
// - Next, pass this function (From App) as a prop to the PetList component and call it when a pet is clicked. This should replace the console log we added earlier.
// - Before moving on, test that you can click on a pet and have the selected state update to the selected pet. You can check this with the React DevTools.

// --------------------------------
// CREATE PET BUTTON:
// --------------------------------
// - Finally, in PetList.jsx, we can create our button. It will call handleFormView when clicked, and we’ll also change what text is displayed based on the value of isFormOpen.
// - The button should say Close Form if the form is open (true).
// - The button should say Add Pet if the form is closed (false).
// - Back to App.jsx to conditionally render form.
import styles from "./PetList.module.scss";

const PetList = (props) => {
  // Let's ensure we have data to work with before adding functionality!
  // ? console.log(props);

  return (
    <div className={styles.sidebarContainer}>
      <h2>Pet List</h2>
      <div className={styles.listContainer}>
        {!props.pets.length ? (
          <h2>No Pets Yet!</h2>
        ) : (
          <ul>
            {props.pets.map((pet) => (
              // ? <li
              //   ? key={pet._id}
              //   ? style={{ cursor: "pointer", color: "#646CFF" }}
              //   ? onClick={() => console.log(pet)}>
              <li
                key={pet._id}
                style={{ cursor: "pointer", color: "#646CFF" }}
                onClick={() => props.handleSelect(pet)}>
                {`Name: ${pet.name}`} <br /> {`Breed: ${pet.breed}`}
                <hr />
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Our new button! */}
      <button onClick={props.handleFormView}>
        {props.isFormOpen ? "Close Form" : "New Pet"}
      </button>
    </div>
  );
};

export default PetList;
