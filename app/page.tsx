"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import BarLoader from "react-spinners/BarLoader"

export default function IndexPage() {
  const router = useRouter()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push("/dashboard")
    }, 2000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section className="flex flex-col items-center justify-center text-center text-slate-100">
      <h1 className="mt-12 text-8xl font-bold">KPIs</h1>

      <h2>
        <span className="text-4xl text-blue-400">v</span>
        <span className="text-4xl text-blue-500">2</span>
      </h2>

      <div className="mt-12 flex flex-col items-center justify-center">
        <BarLoader color="#f1f5f9" />
      </div>
    </section>
  )
}
