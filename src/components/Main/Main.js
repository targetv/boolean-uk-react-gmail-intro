import './Main.css'

import backArrow from '../../assets/icons/back-arrow.png'
import downloadButton from '../../assets/icons/download-button.png'
import rubbishButton from '../../assets/icons/rubbish-bin-delete-button.png'

import EmailContent from './EmailContents'

const state = {
  emails: [
    {
      header: 'Hello World',
      sender: 'Sean Davison',
      date: '17th March 2021',
      heading: 'New Code'
    },
    {
      header: 'Hello Boolean',
      sender: 'Sean Davison',
      date: '17th March 2021',
      heading: 'Boolean'
    }
  ]
}

function Main() {
  return (
    <main className="email-view">
      <nav className="email-toolbar">
        <ul>
          <li>
            <img className="icon" src={backArrow} alt="reply button" />
          </li>
          <li>
            <img className="icon" src={downloadButton} alt="archive button" />
          </li>
          <li>
            <img className="icon" src={rubbishButton} alt="delete button" />
          </li>
        </ul>
        <div className="space"></div>
        <div>
          <p>1 of 25</p>
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </nav>
      <ul>
        {state.emails.map(email => (
          <li>
            <EmailContent
              name={email.sender}
              content={email.content}
              heading={email.heading}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Main
