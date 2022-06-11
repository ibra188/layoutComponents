import React from "react";
import Layout from "./Layout";
import style from "./Feed.modules.css";

export default function Feed(){
    return(
        <Layout
            header={<div className={style.FeedHeader}>Header</div>}
            main={
               <div className={style.ItemList}>
                   {itemData.map((item, idx) => (
                       <div key={idx} className={style.Item}>
                           {item}
                       </div>
                   ))}
               </div>
            }
            footer={<div className={style.FeedFooter}>Footer</div>}
        />
    );
}

const itemData = [1, 2, 3, 4, 5];


