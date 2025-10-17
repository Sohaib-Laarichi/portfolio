'use client'

import { useState, useEffect } from 'react'

interface TypewriterProps {
  words: string[]
  speed?: number
  deleteSpeed?: number
  delayBetweenWords?: number
  className?: string
}

const Typewriter = ({ 
  words, 
  speed = 150, 
  deleteSpeed = 100, 
  delayBetweenWords = 2000,
  className = ""
}: TypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, delayBetweenWords)
    } else if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deleteSpeed)
      }
    } else {
      const targetWord = words[currentWordIndex]
      if (currentText === targetWord) {
        setIsWaiting(true)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(targetWord.slice(0, currentText.length + 1))
        }, speed)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, isWaiting, words, speed, deleteSpeed, delayBetweenWords])

  return (
    <span className={`${className} relative`}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default Typewriter