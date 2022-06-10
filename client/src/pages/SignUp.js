import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../util/auth";

// This signup form is intentionally minimalist to reduce effort required to
// customize it to your app's needs. See the excellent best practices guide for
// sign informs on web.dev https://web.dev/sign-in-form-best-practices/

// TODO: customize styles or import styles with favorite css approach
const styles = {
  formControl: {
    display: "flex",
    padding: "0.25em",
  },
  label: {
    flex: "0 1 6em",
    paddingRight: "0.25em",
  },
};

const initialFormState = {
  username: "",
  email: "",
  password: "",
  age: "",
  city: "",
  skinType: "",
  clenser: "",
  toner: "",
  mosturizer: "",
  serums: "",
  bio: "",
};

export default function SignUp() {
  const { isLoggedIn, signup, loading, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (error) {
      // TODO: replace window alert with custom alert.
      alert(error);
    }
  }, [error]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    signup(formState);
  };

  if (isLoggedIn) {
    // navigate to the home page
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div style={styles.formControl}>
          <label htmlFor="username" style={styles.label}>
            Username
          </label>
          <input
            autoFocus
            disabled={loading}
            id="username"
            type="text"
            placeholder="Enter username"
            name="username"
            value={formState.username.value}
            onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            disabled={loading}
            id="email"
            type="email"
            name="email"
            placeholder="Enter email"
            value={formState.email.value}
            onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <label htmlFor="new-password" style={styles.label}>
            Password
          </label>
          <input
            disabled={loading}
            id="new-password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={formState.password.value}
            onChange={handleInputChange}
          />
        </div>

        <div style={styles.formControl}>
          <label htmlFor="age" style={styles.label}>
            Age
          </label>
          <input
            autoFocus
            disabled={loading}
            id="age"
            type="text"
            placeholder="Enter age"
            name="age"
            value={formState.age.value}
            onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <label htmlFor="city" style={styles.label}>
            City
          </label>
          <input
            disabled={loading}
            id="city"
            type="text"
            name="city"
            placeholder="Enter city"
            value={formState.city.value}
            onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <label htmlFor="skin-type" style={styles.label}>
            Skin Type
          </label>
          <input
            disabled={loading}
            id="skin-type"
            type="text"
            name="skin-type"
            placeholder="Enter your skin type"
            value={formState.skinType.value}
            onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <label htmlFor="clenser" style={styles.label}>
            Clenser
          </label>
          <input
            disabled={loading}
            id="clenser"
            type="text"
            name="clenser"
            placeholder="Enter your clenser"
            value={formState.clenser.value}
            onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <label htmlFor="moisturizer" style={styles.label}>
            Mosturizer
          </label>
          <input
            disabled={loading}
            id="mosturizer"
            type="text"
            name="mosturizer"
            placeholder="Enter your mosturizer"
            value={formState.mosturizer.value}
            onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <label htmlFor="toner" style={styles.label}>
            Toner
          </label>
          <input
            disabled={loading}
            id="toner"
            type="text"
            name="toner"
            placeholder="Enter your toner"
            value={formState.toner.value}
            onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <label htmlFor="serums" style={styles.label}>
            Serums
          </label>
          <input
            disabled={loading}
            id="serums"
            type="text"
            name="serums"
            placeholder="Enter your serums"
            value={formState.serums.value}
            onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <label htmlFor="bio" style={styles.label}>
            Tell us about your skin!
          </label>
          <input
            disabled={loading}
            id="bio"
            type="text"
            name="bio"
            placeholder="Enter your skin type"
            value={formState.bio.value}
            onChange={handleInputChange}
          />
        </div>
        <div style={styles.formControl}>
          <button disabled={loading} type="submit">
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
