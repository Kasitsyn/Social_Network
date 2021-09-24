import { Field, InjectedFormProps } from 'redux-form';
import { reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';

type PropsType = {

}

export type AddPostFormValuesType = { 
newPostText: string
}
const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"}/>
            </div>
            <div>
                <button>
                    Add post
                </button>
            </div>
        </form>
    )
} 

export default reduxForm<AddPostFormValuesType, PropsType>({form: "profile-add-post"})(AddPostForm)