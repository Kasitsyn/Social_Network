import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    Алексей
                </div>
                <div className={s.dialog}>
                    Ольга
                </div>
                <div className={s.dialog}>
                    Олег
                </div>
                <div className={s.dialog}>
                    Константин
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hey!</div>
                <div className={s.dialog}>How are you?</div>
                <div className={s.dialog}>Thanks for IT!</div>
            </div>
        </div>
    )

}

export default Dialogs