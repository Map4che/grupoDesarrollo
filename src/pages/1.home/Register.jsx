import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div class="container-login__form">
    <form action="">
        <label htmlFor="name">
            <span>Nombre: </span>
        <input type="text" id="name"/>
        </label>

        <label htmlFor="">
            <span>Correo Electronico</span>
        <input type="text" />
        </label>

        <label htmlFor="">
            <span>Password</span>
        <input type="text" />
        </label>

        <label htmlFor="">
            <span>Repetir Password </span>
        <input type="text" />
        </label>
        <p><span></span><Link to="/">Regresar</Link></p>
        </form>
        </div>
  )
}

export default Register;
