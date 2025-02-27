import React, { useState } from "react"
import { FaBell, FaCheckCircle, FaTimesCircle, FaTrash } from "react-icons/fa"

const Notifications = () => {
  const [notific, setNotific] = useState([
    {
      id: 1,
      title: "New message received",
      time: "2m ago",
      note: "You have a new message from John Doe. Click here to read it.",
      read: false,
    },
    {
      id: 2,
      title: "Meeting reminder",
      time: "3m ago",
      note: "Your team meeting starts in 15 minutes. Don't forget to join!",
      read: false,
    },
    {
      id: 3,
      title: "Task completed",
      time: "9m ago",
      note: "Great job! You've completed all your assigned tasks for today.",
      read: false,
    },
    {
      id: 4,
      title: "System update",
      time: "1hr ago",
      note: "A new system update is available. Please restart your computer to install it.",
      read: false,
    },
  ])

  const [tab, setTab] = useState("direct")

  const toggleReadStatus = (id) => {
    setNotific((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: !notification.read } : notification,
      ),
    )
  }

  const clearAll = () => {
    setNotific([])
  }

  const TabButton = ({ active, onClick, children }) => (
    <button
      className={`flex-1 py-4 px-6 text-md font-bold focus:outline-none ${
        active ? "text-blue-950 border-b-2 border-blue-950 " : "text-gray-500 hover:text-gray-700"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )

  const NotificationItem = ({ data, toggleReadStatus }) => (
    <div
      className={`p-4 border-b w-full  border-gray-200 transition-colors duration-300 ${data.read ? "bg-gray-50" : "bg-white"}`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{data.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{data.note}</p>
        </div>
        <span className="text-xs text-gray-500">{data.time}</span>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
            data.read ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "bg-blue-100 text-blue-800 hover:bg-blue-200"
          }`}
          onClick={() => toggleReadStatus(data.id)}
        >
          {data.read ? (
            <>
              <FaTimesCircle className="mr-1" />
              Mark as Unread
            </>
          ) : (
            <>
              <FaCheckCircle className="mr-1" />
              Mark as Read
            </>
          )}
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100 mt-14 lg:mt-20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mt-3 text-gray-900 mb-8 flex items-center justify-center">
          <FaBell className="mr-2 text-blue-950" />
          Notifications
        </h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex border-b border-gray-200">
            <TabButton active={tab === "direct"} onClick={() => setTab("direct")}>
              Direct
            </TabButton>
            <TabButton active={tab === "overall"} onClick={() => setTab("overall")}>
              Overall
            </TabButton>
          </div>
          {notific.length > 0 ? (
            <div>
              {notific.map((data) => (
                <NotificationItem key={data.id} data={data} toggleReadStatus={toggleReadStatus} />
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">No notifications available.</div>
          )}
        </div>
        {notific.length > 0 && (
          <div className="mt-6 text-center">
            <button
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={clearAll}
            >
              <FaTrash className="mr-2" />
              Clear All Notifications
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Notifications

