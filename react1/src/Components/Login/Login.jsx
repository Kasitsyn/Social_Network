import { Field, reduxForm } from "redux-form"
import { Input } from "../common/FormsControls/FormsControls"
import { maxLengthCreator, required } from './../../utils/validators/validators';

const maxLength15 = maxLengthCreator(15)

const LoginForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" validate={[required, maxLength15]} placeholder={"Login"} name={'login'} component={Input}/>
            </div>
            <div>
                <Field type="password" validate={[required, maxLength15]} placeholder={"Password"} name={'password'} component={Input}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component='input'/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)

const Login = (props) => {

    // const onSubmit = (formData) => {
    //     console.log(formData)
    // }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm />
    </div>
}

export default Login