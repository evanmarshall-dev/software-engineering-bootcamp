import { useState, useContext } from "react";
import { useNavigate } from "react-router";

import { signUp } from "../../services/authService";

import { UserContext } from "../../contexts/UserContext";

import SignUpIcon from "../../assets/images/signup.svg";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConf: "",
  });

  const { username, password, passwordConf } = formData;

  const handleChange = (evt) => {
    setMessage("");
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newUser = await signUp(formData);
      setUser(newUser);
      navigate("/");
    } catch (err) {
      setMessage(err.message);
    }
  };

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
  };

  return (
    <main className={styles.container}>
      <section>
        <img src={SignUpIcon} alt='An owl sitting on a sign' />
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <p>{message}</p>
          <div>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='name'
              value={username}
              name='username'
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              name='password'
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='confirm'>Confirm Password:</label>
            <input
              type='password'
              id='confirm'
              value={passwordConf}
              name='passwordConf'
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button disabled={isFormInvalid()}>Sign Up</button>
            <button onClick={() => navigate("/")}>Cancel</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SignUpForm;
