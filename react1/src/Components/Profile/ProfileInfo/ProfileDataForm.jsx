import { Field, reduxForm } from "redux-form"
import { Input } from "../../common/FormsControls/FormsControls"
import s from "./ProfileDataForm.module.css"
import { Textarea } from './../../common/FormsControls/FormsControls';

const ProfileDataForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        {<div><button>save</button></div>}
        {props.error && <div className={s.formSummaryError}>{props.error}</div>}
        <div>
            <b>Full name:</b> <Field placeholder={"Full name"} name={'fullName'} component={Input} />
        </div>

        <div>
            <b>looking for a job:</b> <Field name={'lookingForAJob'} component={Input} type={"checkbox"} />
        </div>

        <div>
            <b>My professional skills:</b> <Field placeholder={"My professional skills"} name={'lookingForAJobDescription'} component={Textarea} />
        </div>

        <div>
            <b>About me:</b> <Field placeholder={"About me"} name={'aboutMe'} component={Textarea} />
        </div>

        <div>
            <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    {key}: <Field placeholder={key} name={'contacts.' + key} component={Input} />
                </div>
            })}
        </div>

    </form>
}

const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)
export default ProfileDataReduxForm