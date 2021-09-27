import { Field, Form, Formik } from 'formik'
import { FilterType } from '../../Redux/users-reducer';
import React from 'react';
import { useSelector } from 'react-redux';
import { getUserFilter } from './../../Redux/users-selectors';



type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}




type FormType = {
  term: string
  friend: "null" | "true" | "false"
}

const usersSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
};
const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
  const submit = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void; }) => {
    const filter: FilterType = {
      term: values.term,
      friend: values.friend === 'null' ? null
        : values.friend === 'true' ? true : false
    }
    props.onFilterChanged(filter)
    setSubmitting(false)
  };

  const filter = useSelector(getUserFilter)
 
  return <div>
    <Formik initialValues={{ term: filter.term, friend: String(filter.friend) as "null" | "true" | "false"}} validate={usersSearchFormValidate} onSubmit={submit} enableReinitialize={true}>
      {({ isSubmitting }) => (
        <Form>
          <Field type='text' name='term' />
          <Field name='friend' as='select'>
            <option value="null">All</option>
            <option value="true">Only followed</option>
            <option value="false">Only unfollowed</option>
          </Field>
          <button type="submit" disabled={isSubmitting}>
            Find
          </button>
        </Form>
      )}
    </Formik>

  </div>;
})

export default UsersSearchForm