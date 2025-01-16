'use client'

import { useEffect } from 'react'

export default function Error({
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
    <main className="content-wrapper h-75">
      <section className="container d-flex flex-column justify-content-center align-items-center h-100 ">


        <h2 className="">Bir şeyler ters gitti!</h2>
        <button
          className={`btn btn-dark`}
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Yeniden dene
        </button>
      </section>
    </main>
  )
}

