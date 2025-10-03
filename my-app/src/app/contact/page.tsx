// app/(private)/account/contact/page.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 sm:px-6 md:px-16 py-12">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-center mb-8 leading-snug">
        Contact Me
      </h1>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-4xl">
        {/* Contact Info */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold font-sans">Get in Touch</h2>
          <p className="text-gray-700 font-sans">
            Feel free to reach out for collaborations, questions, or just to say hi!  
            I'm always open to discuss new projects or opportunities.
          </p>

          <div className="space-y-2 text-gray-700 font-sans">
            <p><strong>Email:</strong> NimaRahnamadev1996@gmail.com</p>
            <p><strong>Phone:</strong> +989336454393</p>
            <p><strong>Location:</strong> Iran</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex-1 flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Your name" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your email" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message" className="mt-1" rows={5} />
          </div>
          <Button type="submit" className="bg-orange-400 hover:bg-orange-500 text-white font-sans mt-2">
            Send Message
          </Button>
        </form>
      </div>

      <Link href="/" className="mt-12">
        <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-sans">
          ← Back to Home
        </Button>
      </Link>
    </div>
  )
}
