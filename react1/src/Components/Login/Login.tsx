import { useDispatch, useSelector } from "react-redux";
import { Field, InjectedFormProps, reduxForm} from "redux-form"
import { Input } from "../common/FormsControls/FormsControls"
import { required } from '../../utils/validators/validators';
import { logIn } from '../../Redux/auth-reducer';
import { Redirect } from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css";
import { AppStateType } from "../../Redux/redux-store";

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

type LoginPropsType = {

}

export const Login: React.FC<LoginPropsType> = (props) => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    
    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(logIn(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
    </div>
}
