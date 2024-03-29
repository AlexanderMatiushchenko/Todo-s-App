import React from "react";
import { Icon } from '@iconify/react';
import s from './index.module.css'
import {url} from '../../utils/var'
import { Link } from "react-router-dom";

function Footer(){

    return(
        <div className={s.footerContainer}>
          
<Link to={`${url}/notes`}>
<Icon icon="tabler:notes" />
</Link>

<Link to={`${url}/input`}>
<Icon icon="fluent:task-list-add-24-regular" />
</Link>



<Link className={s.home} to={`${url}/home`}>


    <Icon icon="mingcute:home-3-fill" />
    
</Link>

<Link className={s.Icons} to={`${url}/todoliste`}>
<Icon icon="fluent:tasks-app-20-filled" />
</Link>
<Link to={`${url}/todaytodoitems`}>
<Icon icon="fluent:tasks-app-20-regular" />
</Link>

        </div>
    )
}
export default Footer;

{/* <Icon icon="mdi:bell-outline" />
<Icon icon="carbon:user-settings" /> */}