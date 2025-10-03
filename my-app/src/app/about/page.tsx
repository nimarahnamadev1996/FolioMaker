// app/(private)/account/about/page.tsx
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 sm:px-6 md:px-16 py-12">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-center mb-8 leading-snug">
        About Me
      </h1>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full max-w-4xl">

        <div className="flex-1 space-y-4">
          <p className="text-base sm:text-lg md:text-lg font-sans text-gray-700 leading-relaxed">
            Hi! I'm Nima, a passionate Frontend Developer with experience in building responsive, modern web applications using Next.js, React, TypeScript, and Tailwind CSS. I love creating elegant solutions that combine clean design with excellent functionality.
          </p>

          <p className="text-base sm:text-lg md:text-lg font-sans text-gray-700 leading-relaxed">
            Over the years, I've worked on projects ranging from personal portfolios to e-commerce platforms, always striving to learn new technologies and improve user experiences.
          </p>

          <Button
            as="a"
            href="/resume.pdf"
            target="_blank"
            className="mt-4 bg-orange-400 hover:bg-orange-500 text-white font-sans">
            Download Resume
          </Button>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-12 w-full max-w-4xl grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card className="bg-white shadow-md">
          <CardContent>
            <CardTitle className="font-sans text-lg">Frontend</CardTitle>
            <p className="text-sm sm:text-base font-sans text-gray-600 mt-2">React, Next.js, TypeScript, Tailwind CSS, ShadCN</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md">
          <CardContent>
            <CardTitle className="font-sans text-lg">Database</CardTitle>
            <p className="text-sm sm:text-base font-sans text-gray-600 mt-2">Working with databases like Supabase and MongoDB</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md">
          <CardContent>
            <CardTitle className="font-sans text-lg">Tools & Others</CardTitle>
            <p className="text-sm sm:text-base font-sans text-gray-600 mt-2">Git, GitHub, Figma, Firebase, Vercel</p>
          </CardContent>
        </Card>
      </div>

      <Link href="/" className="mt-12">
        <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-sans">
          ← Back to Home
        </Button>
      </Link>
    </div>
  )
}
