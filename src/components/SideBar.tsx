
import { signOut } from 'next-auth/client';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { SideBarContext } from '../context/SideBarContext'

import styles from '../styles/components/SideBar.module.css';
import homeIcon from '../styles/icons/HomeIcon.module.css';
import rankIcon from '../styles/icons/RankIcon.module.css';
import logoutIcon from '../styles/icons/LogoutIcon.module.css';


export function SideBar() {

    const router = useRouter()

    const { isHome, visitHome, visitRank } = useContext(SideBarContext);

    const handleSignout = (e) => {
        e.preventDefault()
        signOut()
    }


    return (

        <>
            <div id="SideBar" className={styles.sideBarContainer}>
                <button className={styles.siderBarOpenCloseButton}
                    onClick={() => document.getElementById("SideBar").style.width = "0px"}>
                    <img className={styles.sideBarLogo} src="logo.svg" alt="move.it" />
                </button>
                <button className={styles.sideBarHome} onClick={() => visitHome()}>
                    <div className={homeIcon.homeIcon}>
                        <div className={homeIcon.homeIconRoof}></div>
                        <div className={homeIcon.homeIconDoor} />
                    </div>
                </button>
                <button className={styles.sideBarRank} onClick={() => visitRank} >
                    <div className={rankIcon.rankIcon}>
                        <div className={rankIcon.rankIconLeftFlag}></div>
                        <div className={rankIcon.rankIconRightFlag}></div>
                    </div>
                </button>
                <button className={styles.sideBarLogout} onClick={handleSignout}>
                    <div className={logoutIcon.logoutIcon}>
                        <div className={logoutIcon.logoutIconArrow} />
                    </div>
                </button>


            </div>
            <button className={styles.siderBarOpenCloseButton}
                onClick={() => document.getElementById("SideBar").style.width = "114px"}>
                <img className={styles.sideBarLogo} src="logo.svg" alt="move.it" />
            </button>


        </>
    );
}