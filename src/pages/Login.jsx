import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    const user = {
      email: email,
      role: email === "admin@gmail.com" ? "admin" : "user",
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Đăng nhập thành công");
    if (user.role === "admin") {
      navigate("/admin/orders");
    } else {
      navigate("/");
    }
    window.location.reload();
  };
  return (
    <>
      <div className="container py-5">
        <h2 className="mb-4">Đăng nhập</h2>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
        />
        <button className="btn btn-dark" onClick={handleLogin}>
          Đăng nhập
        </button>
      </div>
    </>
  );
}
export default Login;
