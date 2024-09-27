export const metadata = {
  title: "Dashboard login",
  description: "login page",
};

export default function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <h3>Login as Admin</h3>
        <form className="form">
          <div className="form-group">
            <label htmlFor="user">Email or User Name</label>
            <input type="text" id="user" />
          </div>
          <div className="form-group">
            <label htmlFor="passwrod">passwrod</label>
            <input type="password" id="passwrod" />
          </div>
          <button className="btn">Login</button>
        </form>
      </div>
    </div>
  );
}
