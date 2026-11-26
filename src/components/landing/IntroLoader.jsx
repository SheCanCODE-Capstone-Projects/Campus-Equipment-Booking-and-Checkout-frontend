
import { useEffect, useState } from 'react'

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [showTitle, setShowTitle] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      setShowTitle(true)

      const interval = setInterval(() => {
        setProgress((current) => {
          if (current >= 100) {
            clearInterval(interval)
            return 100
          }

          return Math.min(current + 4, 100)
        })
      }, 80)

      return () => clearInterval(interval)
    }, 2000)

    return () => clearTimeout(titleTimeout)
  }, [])

  useEffect(() => {
    if (progress !== 100) return

    setIsLeaving(true)

    const timeout = setTimeout(() => {
      onComplete()
    }, 1400)

    return () => clearTimeout(timeout)
  }, [progress, onComplete])

  return (
    <div className={`intro-loader ${isLeaving ? 'is-leaving' : ''}`}>
      <div className="intro-loader-content">
        {showTitle && (
          <>
            <h1>
              IG<span>i</span>RE RWANDA
            </h1>

            <p>Home of learning, growth and opportunities.</p>
          </>
        )}
      </div>

      <div className="intro-progress">
        <strong>
          {progress}<span>%</span>
        </strong>
      </div>
    </div>
  )
}
