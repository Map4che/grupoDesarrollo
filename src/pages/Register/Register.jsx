import {Link} from 'react-router-dom';
import './Register.css'

const Register = () => {
  return (
    <div class="container-login__form">
        <form action="">
            <p>Register</p>
            <label htmlFor="name">
                <span>Nombre</span>
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
            <button>Continue</button>
            <div>
                <p>you already have an account click <Link to="/">Here</Link></p>
            </div>

        </form>
    </div>
  )
}

export default Register;
