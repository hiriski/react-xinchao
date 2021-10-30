import React, { FC } from 'react'

const Hello: FC<{ text: string }> = ({ text }: { text: string }) => {
  return <h1>{text}</h1>
}

export default Hello
