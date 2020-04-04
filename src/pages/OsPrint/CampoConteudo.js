import React from 'react'

export default function CampoConteudo (props) {
  return (
    <p>
      <strong>{props.data.label}: </strong> <span>{props.data.text}</span>
    </p>
  )
};
