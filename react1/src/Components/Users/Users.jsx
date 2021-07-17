import React from 'react'
import s from './Users.module.css'

const Users = (props) => {
    return (
       <div>
           <span>
               <div className={s.item}>
                   <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" alt="avatar" />
               </div>
               <div>
                   <button>Follow</button>
               </div>
           </span>
           <span>
               <span>
                   <div>fullname</div>
                   <div>status</div>
               </span>
               <span>
                   <div>location</div>
                   <div>city</div>
               </span>
           </span>
       </div>

    );

}
export default Users;