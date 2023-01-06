import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">
      <form className="form" data-testid="login-form">
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
