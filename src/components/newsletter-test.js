import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"

const NewsletterStyle = styled.div`
  .button {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`

export default class SubscribeForm extends React.Component {
  state = {
    email: "",
    responseMessage: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({ message: result.msg })
  }
  render() {
    return (
      <NewsletterStyle>
        <form
          name="subscribeForm"
          method="POST"
          id="subscribe-form"
          className="subscribe-form"
          onSubmit={this.handleSubmit}
        >
          <div
            className="message"
            dangerouslySetInnerHTML={{ __html: this.state.message }}
          />
          <div className="form-row">
            <label>
              <input
                className="subscribe-email"
                type="email"
                name="email"
                placeholder="Enter Email Address..."
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <button className="button" type="submit">
            Subscribe
          </button>
        </form>
      </NewsletterStyle>
    )
  }
}
