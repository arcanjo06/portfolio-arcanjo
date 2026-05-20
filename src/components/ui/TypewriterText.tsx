'use client'

import { useState, useEffect } from 'react'

export function TypewriterText({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    const typeSpeed = isDeleting ? 50 : 100
    
    if (!isDeleting && text === currentPhrase) {
      setTimeout(() => setIsDeleting(true), 2000)
      return
    }

    if (isDeleting && text === '') {
      setIsDeleting(false)
      setPhraseIndex((prev) => (prev + 1) % phrases.length)
      return
    }

    const timeout = setTimeout(() => {
      setText(currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1)))
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex, phrases])

  return (
    <span className="inline-block min-h-[1.5em]">
      {text}
      <span className="animate-pulse-slow">|</span>
    </span>
  )
}
