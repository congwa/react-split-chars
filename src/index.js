import React, { Fragment } from 'react'

export const SplitChars = React.forwardRef(({ children, wrapper }, ref) => {
  if (typeof children !== 'string') {
    throw new Error('SplitChars only accepts a string as child.')
  }
  return (
    <>
      {children
        .split(
          /(?=(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))/
        )
        .map((char, i) => {
          if (char === ' ') {
            return <Fragment key={i}> </Fragment>
          }
          return React.cloneElement(wrapper, { ref, key: i }, char)
        })}
    </>
  )
})
