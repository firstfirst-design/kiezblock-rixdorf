import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import LogoSVG from "../../../logos/logo-kiezblock-rixdorf.svg"
import { rhythm } from "../../../utils/typography"

const LinkStyle = styled(Link)`
  .logo {
    height: ${rhythm(3)};
  }

  .logo:hover {
    filter: brightness(0) saturate(100%) invert(43%) sepia(13%) saturate(2789%)
      hue-rotate(313deg) brightness(100%) contrast(77%);
  }

  @media (min-width: 992px) {
    position: fixed;
    top: ${rhythm(1)};
    left: ${rhythm(1)};
  }
`

export default function Logo() {
  return (
    <LinkStyle to="/">
      <LogoSVG className="logo" alt="Logo Kiezblock Rixdorf" />
    </LinkStyle>
  )
}
