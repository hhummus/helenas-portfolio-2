import React from "react";

function Contact({ show }) {
  return (
    <div
      className={`${show ? "d-block" : "d-none"} card-container infoContent`}
    >
      <div className="col">
        <p className="sectionDescription">
          Your request will be sent to the recipient of this website, Helena
          Løkkeberg. Usually replies within 2-3 working days.{" "}
        </p>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-block">
            <div className="front">
              <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name"></input>

                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject"></input>

                <label htmlFor="message">message</label>
                <input
                  type="textarea"
                  id="message"
                  name="message"
                  cols="50"
                ></input>

                <button type="submit" className="sendEmail">
                  Send email
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
