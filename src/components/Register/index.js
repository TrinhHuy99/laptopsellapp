import '../Register/index.scss';
import RegisterForm from './RegisterForm';
function Register() {
    const handleSubmit = (data) => {
    }
    return (
        <div className="register-account">
            <RegisterForm onSubmit={handleSubmit}></RegisterForm>
        </div>
    )
}
export default Register;