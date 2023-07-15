import React from 'react';

type TitleProps = {
    title: string
}

const Title = (props: TitleProps) => {
  return (
    <div>{props.title}</div>
  )
}

export default Title