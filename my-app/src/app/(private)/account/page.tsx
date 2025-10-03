"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FolderKanban, Sparkles } from "lucide-react"

export default async function AccountPage() {


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-gray-100 px-4 sm:px-6">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl items-center">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
            <span className="text-xs sm:text-sm font-medium text-yellow-600 uppercase tracking-wide">
              FolioMaker
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4">
            Welcome to <span className="text-yellow-500">Your Portfolio Page</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6">
            Create, customize, and share your professional portfolio with ease — 
            all in just a few minutes.
          </p>

          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg shadow-lg">
            <Link href={'/account/profile'}>
              Start Building
            </Link>
          </Button>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center">
          <div className="w-64 sm:w-80 h-56 sm:h-64 bg-gradient-to-br from-yellow-50 to-white shadow-xl rounded-2xl p-4 sm:p-6 border border-gray-200 hover:scale-105 transition-transform duration-300">
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-100 flex items-center justify-center shadow-md">
                <FolderKanban className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-base sm:text-lg">My Portfolio</h3>
                <p className="text-xs sm:text-sm text-gray-500">Designer • Developer</p>
              </div>
              <span className="ml-auto px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-yellow-500 text-white font-semibold shadow-sm">
                PRO
              </span>
            </div>

            {/* Fake Portfolio Content */}
            <div className="space-y-2">
              <div className="h-2.5 sm:h-3 bg-gray-200 rounded-md w-2/3 sm:w-3/4"></div>
              <div className="h-2.5 sm:h-3 bg-gray-200 rounded-md w-1/2 sm:w-2/4"></div>
              <div className="h-16 sm:h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-[10px] sm:text-sm">
                <span>Project Thumbnail</span>
              </div>
              <div className="flex gap-2 mt-2">
                <button className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition">
                  <Link href={'portfolio/1'}>
                    View
                  </Link>
                </button>
                <button className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 transition">
                  <Link href={'portfolio/1'}>
                    Edit
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
