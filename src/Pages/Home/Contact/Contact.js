import React from "react";
import Fade from "react-reveal/Fade";
import { contact } from "../../../utilities";

const Contact = () => {
  return (
    <section className="w-[90vw] mx-auto mt-5 mb-10">
      <div>
        <div className="section-title text-center font-bold text-xl md:text-2xl py-5 text-info">
          <Fade left>
            <h2>تواصل معنا</h2>
          </Fade>
        </div>
        <div className="flex flex-col lg:gap-x-6 lg:flex-row bg-[#efefef] p-8 my-5 rounded">
          <Fade left>
            <div className="flex flex-col justify-center space-y-8 mb-12 lg:mb-0 lg:pt-2">
              {contact.map((item, index) => {
                const { icon, title, subtitle, description } = item;
                return (
                  <div className="flex gap-x-4" key={index}>
                    <div className="rounded-sm w-14 h-14 flex items-center justify-center mt-2 lg:mb-0 text-3xl text-info">
                      {icon}
                    </div>
                    <div>
                      <h4 className="text-xl mb-1">{title}</h4>
                      <p className="mb-1">{subtitle}</p>
                      <p className="font-normal">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
          <Fade right>
            <form
              target="_blank"
              className="space-y-6 w-full"
              action="https://formsubmit.co/mdnowab29@gmail.com"
              method="POST"
            >
              <div>
                <div className="lg:flex">
                  <input className="input my-2 lg:mr-10 w-full" type="text" name="name" placeholder="Your name" />

                  <input className="input my-2 w-full" type="email" name="email" placeholder="Your email" />
                </div>

                <input className="input my-2 w-full" type="text" name="subject" placeholder="Subject" />
                <br />
                <textarea className="textarea my-2 w-full" name="message" placeholder="Your message"></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-info hover:bg-[#1aa0ffd0] normal-case rounded text-amber-50 font-sans border-none w-full"
              >
                Send message
              </button>
            </form>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Contact;
