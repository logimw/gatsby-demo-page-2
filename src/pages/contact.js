import React from "react"
import Seo from "../components/Seo"
const contact = () => {
  return (
    <>
      <Seo title="contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                id="message"
                rows="5"
                className="form-control"
              />
            </div>
            <button type="submit" className="submit-btn btn">
              Send message
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact
