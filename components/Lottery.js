import { useState } from 'react'
import { Button } from 'antd'

export default function Lottery ({ relatedApplications }) {
  const [isShuffling, setIsShuffling] = useState(false)
  const [intervalRef, setIntervalRef] = useState(null)
  const [displayingApplication, setDisplayingApplication] = useState(null)

  function startShuffle (e) {
    if (isShuffling) {
      return
    }

    setIsShuffling(true)
    setIntervalRef(setInterval(shuffleApplication, 20))
  }

  function pickAWinner (e) {
    if (!intervalRef) {
      return
    }

    setIsShuffling(false)
    clearInterval(intervalRef)
    setIntervalRef(null)
  }

  function shuffleApplication () {
    const displayApplicationIndex = Math.floor(Math.random() * relatedApplications.length)

    setDisplayingApplication({
      relatedApplication: relatedApplications[displayApplicationIndex],
      style: {
        fontSize: 15 + (Math.random() * 15) + 'px',
        color: '#' + (parseInt(Math.random() * 0xffffff)).toString(16),
        textAlign: 'center'
      }
    })
  }

  return (
    <>
      <div className="lottery-container">
        <h2>미니게임</h2>
        <div className="lottery-display" style={displayingApplication?.style}>
          {!displayingApplication &&
            '평행세계의 당첨자는?'
          }
          {displayingApplication &&
          displayingApplication.relatedApplication.userName
          }
        </div>
        <div className="lottery-controller">
          {!isShuffling &&
          <Button type="primary" onClick={startShuffle}>
            {displayingApplication ? '재추첨' : '추첨시작'}
          </Button>
          }
          {isShuffling &&
          <Button type="primary" onClick={pickAWinner}>
            뽑기!
          </Button>
          }
        </div>
      </div>

      <style jsx>{`
        .lottery-container {
          margin: 1.5rem 0.5rem;
          padding: 0.5rem;
          text-align: center;
          border: 1px solid #eaeaea;
          border-radius: 10px;
        }

        .lottery-display {
          margin: 0.2rem;
          padding: 0.2rem;
          text-align: center;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          min-height: 10rem;
          line-height: 10rem;
        }
      `}
      </style>
    </>
  )
}
