import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    const serviceID = 'default_service';
    const templateID = 'template_6jdpqvwH4ds';

    emailjs
      .sendForm(serviceID, templateID, form.current, 'thlrSwQc3bKv5cuiX')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={'text-animate-hover'}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* <div className="info-map">
          Gustavo Laranjeira,
          <br />
          S??o Paulo - SP, Brazil
          <br />
          <span>gustavolaranjeiramo@outlook.com</span>
        </div> */}
        {/* <div className="map-wrap">
          <MapContainer center={[-23.6821604, -46.8754915]} zoom={14}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-23.6821604, -46.8754915]}>
              <Popup>Here is S??o Paulo!</Popup>
            </Marker>
          </MapContainer>
        </div> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact