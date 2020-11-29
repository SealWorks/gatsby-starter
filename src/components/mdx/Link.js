import React from "react"
import { Link as GatsbyLink } from "gatsby"
// import { OutboundLink } from 'gatsby-plugin-gtag';

const Link = ({ children, href, ...rest }) => {
  const internal = /^\/(?!\/)/.test(href)

  if (internal) {
    if (href === "/_admin") {
      return (
        <a href={href} {...rest}>
          {children}
        </a>
      )
    }
    return (
      <GatsbyLink to={href} {...rest}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={href} {...rest} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default Link
