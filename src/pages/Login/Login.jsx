import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="container-login">
      <div class="login">
        <img src="" alt="Logo" class="logo-login" />
        <label htmlFor="email">Correo Electronico</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="contrasenia">Contraseña</label>
        <input type="password" id="contrasenia" required />
        <input type="submit" id="input-boton" value="Ingresa" />
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
