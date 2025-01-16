'use client'

import { useEffect } from 'react'

export default function ErrorBoundary({
                                        error,
                                        reset,
                                      }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [ error ])

  return (
    <div className="container text-center py-5">
      <h2 className="mb-4">Bir şeyler yanlış gitti</h2>
      <p className="mb-4">Üzgünüz, bir hata oluştu. Lütfen tekrar deneyin.</p>
      <button
        className="btn btn-primary"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Tekrar Dene
      </button>
    </div>
  )
}

