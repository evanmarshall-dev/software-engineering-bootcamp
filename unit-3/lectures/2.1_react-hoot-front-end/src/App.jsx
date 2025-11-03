// ----------------------------------------
// USER NOTES:
// - Placing user in the dependency array causes the effect to fire off when the page loads or the user state changes. Within our useEffect(), we invoke fetchAllHoots(), which in turn calls upon the index() service function. On the back-end, our hoots index route is protected, which means the request won’t go through until a user is logged in. Including this if condition prevents the request from being made if a guest accesses this component.
// - Check your browser console and verify that you receive hootsData from the back-end.
// -----------------------------------------

import { useContext, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router";

import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import HootList from "./components/HootList/HootList";
import HootDetails from "./components/HootDetails/HootDetails";
import HootForm from "./components/HootForm/HootForm";
import CommentForm from "./components/CommentForm/CommentForm";

import * as hootService from "./services/hootService";

import { UserContext } from "./contexts/UserContext";

const App = () => {
  const { user } = useContext(UserContext);
  const [hoots, setHoots] = useState([]);

  useEffect(() => {
    const fetchAllHoots = async () => {
      const hootsData = await hootService.index();

      // console log to verify
      // ? console.log("hootsData:", hootsData);
      // update to set state:
      setHoots(hootsData);
      // - We now have hoots state to pass down to the HootList component.
    };
    if (user) fetchAllHoots();
  }, [user]);

  const navigate = useNavigate();

  // - Notice how when we setHoots(), the newHoot is added to the front of the array, ensuring it appears at the top of the page. This matches the behavior of our index() function, which retrieves hoots in descending order (newest first). Adding newHoot to the end would disrupt this order when the page refreshes, as the index() service re-fetches the data.
  const handleAddHoot = async (hootFormData) => {
    // ? console.log("hootFormData", hootFormData);
    const newHoot = await hootService.create(hootFormData);
    setHoots([newHoot, ...hoots]);
    navigate("/hoots");
  };

  const handleDeleteHoot = async (hootId) => {
    const deletedHoot = await hootService.deleteHoot(hootId);
    console.log(deletedHoot);
    // ? setHoots(hoots.filter((hoot) => hoot._id !== hootId));
    setHoots(hoots.filter((hoot) => hoot._id !== deletedHoot._id));
    navigate("/hoots");
  };

  const handleUpdateHoot = async (hootId, hootFormData) => {
    const updatedHoot = await hootService.update(hootId, hootFormData);
    setHoots(hoots.map((hoot) => (hootId === hoot._id ? updatedHoot : hoot)));

    // ? console.log("hootId:", hootId, "hootFormData:", hootFormData);
    navigate(`/hoots/${hootId}`);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        {user ? (
          <>
            {/* Pass in hoot state. */}
            <Route path='/hoots' element={<HootList hoots={hoots} />} />
            <Route
              path='/hoots/:hootId'
              element={<HootDetails handleDeleteHoot={handleDeleteHoot} />}
            />
            <Route
              path='/hoots/new'
              element={<HootForm handleAddHoot={handleAddHoot} />}
            />
            {/* Add this route! */}
            <Route
              path='/hoots/:hootId/edit'
              element={<HootForm handleUpdateHoot={handleUpdateHoot} />}
            />
            <Route
              path='/hoots/:hootId/comments/:commentId/edit'
              element={<CommentForm />}
            />
          </>
        ) : (
          <>
            <Route path='/sign-up' element={<SignUpForm />} />
            <Route path='/sign-in' element={<SignInForm />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
