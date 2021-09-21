import { maxLengthCreator } from "../../../utils/validators/validators"
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Textarea } from "../../common/FormsControls/FormsControls";
import { required } from './../../../utils/validators/validators';
import { NewMessageFormValuesType } from "../Dialogs";

type PropsType = {

}
const maxLength100 = maxLengthCreator(100)

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {

    return (
        <form action="" onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required, maxLength100]} placeholder='enter your message' name='newMessageBody' />
            <button>Send</button>
        </form>
    )
}

export default reduxForm<NewMessageFormValuesType, PropsType>({ form: 'dialogs' })(AddMessageForm)