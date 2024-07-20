import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return () =>   setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_cxlpgzb', 'template_fki5zkm', form.current, 'WmbK_1bd8t3QdjkQN') 
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
  const ichalkaranjiCoords = [16.7097, 74.4564];
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I'm actively seeking freelance opportunities and internships. If you have any specific inquiries or requests, please feel free to contact me. I'm open to discussing various opportunities and addressing any questions you may have.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="from_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="from_email"
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
  <input
    type="submit"
    className="flat-button"
    value="SEND"
    style={{
      backgroundColor: '#007BFF', // Base color
      color: '#FFFFFF', // Text color
      border: 'none',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
    }}
    onMouseOver={(e) => {
      e.target.style.backgroundColor = '#0056b3'; // Hover color
    }}
    onMouseOut={(e) => {
      e.target.style.backgroundColor = '#007BFF'; // Base color
    }}
  />
</li>

              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Sumit Padiyar,
          <br />
          India,
          <br />
          Ichalkaranji <br />
          District Kolhapur <br />
          <br />
          <span>padiyarsumit09@gmail.com</span>
        </div>
        <div className="map-wrap">
        <MapContainer center={ichalkaranjiCoords} zoom={10} scrollWheelZoom={false} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={ichalkaranjiCoords}>
        <Popup>
        Sumit resides at this location, and you are invited to come over for a cup of coffee ;<br /> Maharashtra, India
        </Popup>
      </Marker>
    </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
