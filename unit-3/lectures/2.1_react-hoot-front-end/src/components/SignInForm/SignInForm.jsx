import { useState, useContext } from "react";
import { useNavigate } from "react-router";

import { signIn } from "../../services/authService";

import { UserContext } from "../../contexts/UserContext";

import LoginIcon from "../../assets/images/login.svg";
import styles from "./SignInForm.module.css";

const SignInForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (evt) => {
    setMessage("");
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const signedInUser = await signIn(formData);
      setUser(signedInUser);
      navigate("/");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <main className={styles.container}>
      <section>
        <img src={LoginIcon} alt='An owl sitting on a sign' />
      </section>
      <section>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <p>{message}</p>
          <div>
            <label htmlFor='email'>Username:</label>
            <input
              type='text'
              autoComplete='off'
              id='username'
              value={formData.username}
              name='username'
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              autoComplete='off'
              id='password'
              value={formData.password}
              name='password'
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button>Sign In</button>
            <button onClick={() => navigate("/")}>Cancel</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SignInForm;
