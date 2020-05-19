import React from 'react';


export default function PagePrint (props) {
  return (
    <div className={"page"}>
      <div className={"page-content"}>
        {props.children}
      </div>
    </div>
  )
}