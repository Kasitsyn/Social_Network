import React from 'react'
import { WrappedFieldProps } from 'redux-form'
import styles from './FormsControls.module.css'

export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' '+ (hasError ? styles.error : "")}>
            <textarea {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' '+ (hasError ? styles.error : "")}>
            <input {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}