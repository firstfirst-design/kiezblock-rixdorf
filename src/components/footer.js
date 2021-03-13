import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import NewsletterTest from "./newsletter-test"
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa"
import ComponentLayout from "./component-layout"

const FooterStyle = styled.div`
  padding: 0.5rem;
  background: #e5907c;
  color: white;

  #socialIcons {
    display: flex;
    justify-content: space-evenly;
  }

  #copyrightContainer {
    display: flex;
  }

  #copyright {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  #copyrightText p {
    margin: 0;
  }

  h2 {
    text-align: center;
  }

  a {
    font-size: 3rem;
    color: #a1d0e5;
    text-align: center;
  }

  @media (min-width: 992px) {
    padding: 1rem;

    #newsContainer {
      display: flex;
    }

    #newsletter {
      flex: 1;
      margin-right: 1rem;
    }

    #socialMedia {
      flex: 1;
      margin: 0rem 1rem 0rem 1rem;
    }

    #optionalText {
      flex: 1;
      margin-left: 1rem;
    }
  }
`

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter {
        headingNewsletter
        textNewsletter {
          childMarkdownRemark {
            html
          }
        }
        headingSocialMedia
        textSocialMedia {
          childMarkdownRemark {
            html
          }
        }

        textCopyright {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)

  const footerData = data.contentfulFooter

  return (
    <FooterStyle>
      <div id="newsContainer">
        <div id="newsletter">
          <ComponentLayout>
            <h2>{footerData.headingNewsletter}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: footerData.textNewsletter.childMarkdownRemark.html,
              }}
            />
            <NewsletterTest />
          </ComponentLayout>
        </div>
        <div id="socialMedia">
          <ComponentLayout>
            <h2>{footerData.headingSocialMedia}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: footerData.textSocialMedia.childMarkdownRemark.html,
              }}
            />
            <div id="socialIcons">
              <a
                href="https://twitter.com/mehrkiezrixdorf?lang=de"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitterSquare />
              </a>
              <a
                href="https://www.instagram.com/kiezblockrixdorf/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagramSquare />
              </a>
            </div>
          </ComponentLayout>
        </div>
        <div id="optionalText">
          <ComponentLayout>
            <p>
              Kiezblock Rixdorf ist eine Kampagne der Initiative „Mehr Kiez für
              Rixdorf!“ “Mehr Kiez für Rixdorf” ist ein Projekt von Changing
              Cities e.V.
            </p>
          </ComponentLayout>
        </div>
      </div>

      <div id="copyrightContainer">
        <StaticImage
          src="http://images.ctfassets.net/ibcn0bfdro5j/3zet76MsDA2mZyxhFdh9dR/8f9290ed91415620ecb749957ab12611/logo-kiezblock-rixdorf-wei__.png"
          alt="tbd"
          placeholder="blurred"
          layout="constrained"
          width={80}
        />

        <div id="copyright">
          <div id="copyrightYear">{new Date().getFullYear()}&nbsp; </div>
          <div
            id="copyrightText"
            dangerouslySetInnerHTML={{
              __html: footerData.textCopyright.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </FooterStyle>
  )
}
