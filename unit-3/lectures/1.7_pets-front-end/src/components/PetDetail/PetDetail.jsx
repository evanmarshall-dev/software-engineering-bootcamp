// --------------------------------
// NOTES:
// --------------------------------
// - Now that we have the selected pet in state, we can conditionally render the pet’s details in the UI.
// - In this file, create a function component called PetDetail, which accepts props as an argument.
// - Back in App.jsx, import the PetDetail component and add it to the return statement. Make sure to pass it the selected state containing our pet object on props.
// - You should now have props.selected available in the PetDetail component!
// - Inside the new PetDetail component, render the details of the selected pet, including the name, breed, and age information.
// - We will also want to conditionally render a header that reads ‘NO DETAILS’ instead of pet details if no pet is currently selected.
// - You can choose to do this in a couple of ways:
// - In a single return statement, use a ternary operator to render the header or pet details based on the status of props.selected. Wrap all the elements returned in a div.
// - If props.selected is falsy (null), return the header wrapped in a div. If props.selected is not falsy, proceed to the normal return with the pet’s details, again wrapped in a div.
// - Make sure to export the PetDetail component at the end of the file! Test it out in the browser, and make sure you can click on a pet to see its details!
import styles from "./PetDetail.module.scss";

const PetDetail = (props) => {
  // Can use an if statement with no ternary in the return or a single ternary like below.
  // ? if (!props.selected) {
  //   ? return (
  //     ? <div>
  //       ? <h2>NO DETAILS</h2>
  //     ? </div>
  //   ? );
  // ? }

  return (
    <div>
      {/* <h2>Pet Detail Component</h2> */}
      {props.selected ? (
        <div className={styles.detailsContainer}>
          <h3>{props.selected.name}</h3>
          <p>Breed: {props.selected.breed}</p>
          <p>
            Age: {props.selected.age} year{props.selected.age > 1 ? "s" : ""}{" "}
            old
          </p>
        </div>
      ) : (
        <div className={styles.detailsContainer}>
          <p>Please select a pet to see the details.</p>
        </div>
      )}
    </div>
  );
};

export default PetDetail;
