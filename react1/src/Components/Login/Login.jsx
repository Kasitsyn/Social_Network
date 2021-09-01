import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form"
import { Input } from "../common/FormsControls/FormsControls"
import { maxLengthCreator, required } from './../../utils/validators/validators';
import { logIn } from './../../Redux/auth-reducer';
import { Redirect } from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css";

const maxLength100 = maxLengthCreator(100)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field placeholder={"email"} name={'email'} validate={[required]} component={Input} />
            </div>
            <div>
                <Field placeholder={"password"} type={"password"} validate={[required]} name={'password'} component={Input} />
            </div>
            <div>
                <Field name={'rememberMe'} component={Input} type={"checkbox"} /> remember me
            </div>

            {props.captchaUrl && <img src={props.captchaUrl} />}
            {props.captchaUrl && <Field placeholder={"Symbols from mage"} name={'captcha'} validate={[required]} component={Input} />}

            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div >
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
        <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, { logIn })(Login)