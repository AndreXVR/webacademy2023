import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { doLogin } from "../../redux/features/api.login.slice";
import { AppDispatch, RootState } from "../../redux/store";
import "./index.css";

export default function Login() {
  const dispatch = useDispatch<AppDispatch>(); //essa linha
  const navigate = useNavigate();

  const stateLogin = useSelector((state: RootState) => state.login);

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  // essa função
  function TryLogin() {
    dispatch(
      doLogin({
        email: email,
        senha: password,
      })
    );
  }

  useEffect(() => {
    if (stateLogin.isSucess) {
      navigate("/home");
    }
  }, [stateLogin.isSucess]);

  return (
    <form style={{ width: "300px" }} className="container">
      <div>
        <h6>Loja Virtual</h6>
      </div>

      <input
        placeholder="Digite seu email"
        onChange={(e) => SetEmail(e.target.value)}
      />
      <input
        placeholder="Digite sua senha"
        onChange={(e) => SetPassword(e.target.value)}
      />

      <Button onClick={() => TryLogin()}>Login</Button>
    </form>
  );
}