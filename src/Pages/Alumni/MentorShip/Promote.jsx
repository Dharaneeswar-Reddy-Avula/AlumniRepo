import { useState } from "react"
import { motion } from "framer-motion"
import { CgMail } from "react-icons/cg"
import { IoShareSocialOutline } from "react-icons/io5"
import { LuFacebook } from "react-icons/lu"
import { FaInstagram } from "react-icons/fa"
import { SlSocialLinkedin } from "react-icons/sl"
import { GoCopy } from "react-icons/go"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Promote = () => {
  const [activeTab, setActiveTab] = useState("My Preferences")
  const [shareLink, setShareLink] = useState("https://aluminirguktn.ac.in")

  const tabs = ["My Preferences", "Mentorship Homepage"]

  const promotionCards = [
    {
      title: "Introduce the mentorship platform to everyone",
      description: [
        "Use this section in 2 steps:",
        "1. Firstly invite seniors to volunteer as mentors",
        "2. Upon getting a few members, introduce mentorship to everyone else",
      ],
      buttons: [
        { text: "Invite Mentors", action: () => toast.success("Invitation sent to potential mentors!") },
        { text: "Invite Everyone", action: () => toast.success("Invitation sent to all members!") },
      ],
    },
    {
      title: "Mail templates to attract more mentors",
      description: [
        "Use this section when:",
        "1. You have just started the mentorship.",
        "2. No new mentors from the past few days.",
      ],
      buttons: [{ text: "Send Mail", icon: CgMail, action: () => toast.info("Mail template opened!") }],
    },
    {
      title: "Send mail to already listed mentors and mentees",
      description: [
        "Use this section in 2 steps:",
        "1. Share the guidelines or any such information.",
        "2. Take feedback and testimonials",
      ],
      buttons: [
        { text: "Mail Mentors", action: () => toast.info("Preparing mail for mentors...") },
        { text: "Mail Mentees", action: () => toast.info("Preparing mail for mentees...") },
      ],
    },
  ]

  const socialMedia = [
    { icon: LuFacebook, name: "Facebook", action: () => window.open("https://facebook.com", "_blank") },
    { icon: FaInstagram, name: "Instagram", action: () => window.open("https://instagram.com", "_blank") },
    { icon: SlSocialLinkedin, name: "LinkedIn", action: () => window.open("https://linkedin.com", "_blank") },
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink)
    toast.success("Link copied to clipboard!")
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-200 ${
              activeTab === tab ? "bg-blue-950 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Promote Mentorship</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          This page will help you promote the Mentorship Platform. It is important to promote mentorship periodically if
          you want it to be effective.
        </p>
      </div>

      {/* Promotion Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {promotionCards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{card.title}</h3>
            <ul className="text-gray-600 mb-6">
              {card.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="flex gap-4">
              {card.buttons.map((button, i) => (
                <button
                  key={i}
                  className="px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
                  onClick={button.action}
                >
                  {button.icon && <button.icon />}
                  {button.text}
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social Media Sharing */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <IoShareSocialOutline className="text-2xl text-blue-950" />
          <h3 className="text-xl font-semibold text-gray-800">Share on Social Media</h3>
        </div>
        <div className="flex justify-center gap-4 mb-6">
          {socialMedia.map((platform, index) => (
            <button
              key={index}
              className="w-12 h-12 bg-blue-950 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              onClick={platform.action}
              aria-label={`Share on ${platform.name}`}
            >
              <platform.icon className="text-2xl" />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <input
            value={shareLink}
            onChange={(e) => setShareLink(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <GoCopy /> Copy
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Promote

