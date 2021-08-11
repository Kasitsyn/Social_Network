import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form"
import { Input } from "../common/FormsControls/FormsControls"
import { maxLengthCreator, required } from './../../utils/validators/validators';
import { logIn } from './../../Redux/auth-reducer';
import { Redirect } from "react-router-dom";

const maxLength100 = maxLengthCreator(100)

const LoginForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"} name={'email'} validate={[required]} component={Input} />
            </div>
            <div>
                <Field placeholder={"password"} type={"password"} validate={[required]} name={'password'} component={Input} />
            </div>
            <div>
                <Field  name={'rememberMe'} component={Input} type={"checkbox"} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.logIn(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { logIn })(Login)