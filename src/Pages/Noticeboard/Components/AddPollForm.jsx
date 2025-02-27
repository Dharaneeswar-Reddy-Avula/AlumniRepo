import { useState } from "react"
import { X } from "lucide-react"

function AddPollForm({ onClose }) {
  const [pollTitle, setPollTitle] = useState("")
  const [pollOptions, setPollOptions] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement poll submission logic
    console.log("Poll submitted:", { title: pollTitle, options: pollOptions })
    onClose()
  }

  return (
    <div className="absolute z-50 right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Add New Poll</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="w-5 h-5" />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="pollTitle" className="block text-sm font-medium text-gray-700">
            Poll Title
          </label>
          <input
            type="text"
            id="pollTitle"
            value={pollTitle}
            onChange={(e) => setPollTitle(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="pollOptions" className="block text-sm font-medium text-gray-700">
            Options (one per line)
          </label>
          <textarea
            id="pollOptions"
            value={pollOptions}
            onChange={(e) => setPollOptions(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#172554] text-white px-4 py-2 rounded-md hover:bg-[#1e3a8a] transition duration-300"
        >
          Add Poll
        </button>
      </form>
    </div>
  )
}

export default AddPollForm

