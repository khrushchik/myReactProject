import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import userPhoto from "../../../assets/images/user-icon.png";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    let contactsElements = Object.entries(props.profile.contacts).map(([key,value])=> <div>{value}</div>)
    return (
        <div>
{/*
            <img
                src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'/>
*/}
            <div className={styles.item}>
                <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto}/>
            </div>
            <div className={styles.nameBlock}>
                {props.profile.fullName}
            </div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large}/>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div className={styles.descriptionBlock}>
                <span className={styles.boldElement}>About me:</span>
                <div>{props.profile.aboutMe}</div>
            </div>
            <div className={styles.descriptionBlock}>
                <span className={styles.boldElement}>Contacts:</span>
                {contactsElements}
            </div>
            <div className={styles.boldElement}>
                {props.profile.lookingForAJob ? 'I`M LOOKING FOR A JOB:' : ''}
            </div>
            <div>
                {props.profile.lookingForAJobDescription}
            </div>
        </div>
    );
}

export default ProfileInfo;