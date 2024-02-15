import React from "react";
import { Icon } from '@iconify/react';
import s from './index.module.css'
import Input from "../Input";
import { Link } from "react-router-dom";

function Footer(){

    return(
        <div className={s.footerContainer}>
            <div className={s.leftContainer}>
<Icon icon="mingcute:home-3-fill" />
<Icon icon="tabler:notes" />
</div>
<Link to= {<Input />}> <div className={s.addTask}><Icon icon="gala:add" /></div></Link>
<div className={s.rightContainer}>
<Icon icon="heroicons:pencil-square" />
<Icon icon="mdi:alarm-clock" />
</div>
        </div>
    )
}
export default Footer;

{/* <Icon icon="mdi:bell-outline" />
<Icon icon="carbon:user-settings" /> */}