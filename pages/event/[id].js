import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import "antd/dist/antd.css";
import { Avatar, Badge } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function event() {
  const router = useRouter()
  const [event, setEvent] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const id = Object.keys(router.query).length > 0 ? router.query.id : location.pathname.replace('/event/', '')

    fetch(`/api/event/${id}`)
    .then(response => response.json())
    .then(event => {
      setEvent(event)
      setIsLoading(false)
      setIsError(false)
    })
    .catch(() => {
      setIsLoading(false)
      setIsError(true)
    })
  }, [])  

  return (
    <div className="container">
      <Head>
        <title>나눔 상세</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          나눔 상세
        </h1>

        <div className="grid">
          {/* 로딩 */}
          {isLoading && "로딩중..."}

          {/* 에러 */}
          {isError && !isLoading && "오류가 발생했습니다."}

          {/* 정상 */}
          {event &&
            <div className="card">
              {event.imagePath && <img src={event.imagePath} className="book-cover" />}
              <h3 className="book-title">{event.title}</h3>
              <div>
                <span className="applicant">
                  응모인원: 
                </span>
                <Badge count={1}>
                  <Avatar shape="square" icon={<UserOutlined />} />
                </Badge>
              </div>
            </div>
            }
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 100%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        .book-cover {
          width: 100%;
          height: 300px;
          margin-bottom: 1rem;
        }

        .book-title {
          min-height: 3.5rem;
        }

        .applicant {
          vertical-align: middle;
          margin-right: 0.3rem;
        }
      `}</style>
    </div>
  )
}
