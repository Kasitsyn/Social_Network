import { connect } from "react-redux";
import { Field, InjectedFormProps, reduxForm} from "redux-form"
import { Input } from "../common/FormsControls/FormsControls"
import { required } from '../../utils/validators/validators';
import { logIn } from '../../Redux/auth-reducer';
import { Redirect } from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css";
import { AppStateType } from "../../Redux/redux-store";
//import { getCaptchaUrl } from './../../Redux/auth-reducer';

//const maxLength100 = maxLengthCreator(100)

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    logIn: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
}

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type LoginFormOwnPropsType = {
    captchaUrl: string | null
}


const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = (props) => {
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

            {props.captchaUrl && <img alt='captcha' src={props.captchaUrl} />}
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

let LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({
    form: 'login'
})(LoginForm)

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        props.logIn(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, { logIn })(Login)