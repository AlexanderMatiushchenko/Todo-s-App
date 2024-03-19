import React from "react";
import { Icon } from '@iconify/react';
import s from './index.module.css'

import { Link } from "react-router-dom";

function Footer(){

    return(
        <div className={s.footerContainer}>
            <div className={s.leftContainer}>

<Icon icon="tabler:notes" />
</div>
<div className={s.addTask}><Icon icon="mingcute:home-3-fill" /></div>

<div className={s.rightContainer}>
<Icon icon="heroicons:pencil-square" />

</div>
        </div>
    )
}
export default Footer;

{/* <Icon icon="mdi:bell-outline" />
<Icon icon="carbon:user-settings" /> */}