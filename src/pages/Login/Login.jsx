import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div class="container-login">
      <div class="login">
        <div class="login__image-y-titulo">
          <img src="" alt="Logo" class="logo-login" />
          <h1 class="login__titulo">Inicie su sesión</h1>
        </div>
        <label htmlFor="email">Usuario:</label>
        <input
          type="email"
          class="form-input"
          id="email"
          name="email"
          placeholder="Correo electronico"
          required
        />
        <label htmlFor="contrasenia">Contraseña:</label>
        <input type="password" class="form-input" id="contrasenia" required />
        <input
          type="submit"
          class="input-boton"
          value="Ingresa"
          name="password"
        />
      </div>
      <p>
        Olvidaste tu contraseña? Haz click{" "}
        <Link to="/recover" class="link">
          aqui
        </Link>
      </p>
      <p>
        Aun no estas registrado? Registrate{" "}
        <Link class="link" to="/register">
          aqui
        </Link>
      </p>
    </div>
  );
};

export default Login;
