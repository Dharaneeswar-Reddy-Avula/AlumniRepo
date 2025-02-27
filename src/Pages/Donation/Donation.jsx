import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const DonationOption = ({ title, description, amount, selected, onSelect }) => (
  <motion.div
    className={`p-6 border rounded-lg cursor-pointer ${selected ? "border-blue-950 bg-blue-50" : "border-gray-200"}`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onSelect}
  >
    <h3 className="text-xl  font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <p className="text-2xl font-bold text-blue-950">${amount.toLocaleString()}</p>
  </motion.div>
)

const PaymentMethodOption = ({ title, icon, selected, onSelect }) => (
  <motion.div
    className={`p-4 border rounded-lg cursor-pointer flex items-center ${
      selected ? "border-blue-950 bg-blue-50" : "border-gray-200"
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onSelect}
  >
    <span className="text-2xl mr-2">{icon}</span>
    <span className="text-lg  font-semibold">{title}</span>
  </motion.div>
)

const Donation = () => {
  const [step, setStep] = useState(1)
  const [selectedOption, setSelectedOption] = useState(null)
  const [customAmount, setCustomAmount] = useState("")
  const [giftFrequency, setGiftFrequency] = useState("one-time")
  const [paymentMethod, setPaymentMethod] = useState(null)
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    graduationYear: "",
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const donationOptions = [
    { id: 1, title: "Bronze Donor", description: "Support student scholarships", amount: 100 },
    { id: 2, title: "Silver Donor", description: "Fund research initiatives", amount: 500 },
    { id: 3, title: "Gold Donor", description: "Contribute to campus improvements", amount: 1000 },
    { id: 4, title: "Platinum Donor", description: "Establish a named scholarship", amount: 5000 },
  ]

  const paymentMethods = [
    { id: "credit-card", title: "Credit Card", icon: "💳" },
    { id: "paypal", title: "PayPal", icon: "🅿️" },
    { id: "bank-transfer", title: "Bank Transfer", icon: "🏦" },
  ]

  useEffect(() => {
    if (selectedOption) {
      setCustomAmount("")
    }
  }, [selectedOption])

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const validateStep = (currentStep) => {
    const newErrors = {}

    if (currentStep === 1) {
      if (!selectedOption && !customAmount) {
        newErrors.amount = "Please select a donation amount or enter a custom amount"
      } else if (customAmount && (isNaN(customAmount) || Number.parseFloat(customAmount) <= 0)) {
        newErrors.amount = "Please enter a valid donation amount"
      }
    } else if (currentStep === 2) {
      if (!personalInfo.firstName) newErrors.firstName = "First name is required"
      if (!personalInfo.lastName) newErrors.lastName = "Last name is required"
      if (!personalInfo.email) newErrors.email = "Email is required"
      else if (!/\S+@\S+\.\S+/.test(personalInfo.email)) newErrors.email = "Email is invalid"
      if (!personalInfo.graduationYear) newErrors.graduationYear = "Graduation year is required"
      else if (isNaN(personalInfo.graduationYear) || personalInfo.graduationYear.length !== 4) {
        newErrors.graduationYear = "Please enter a valid graduation year"
      }
    } else if (currentStep === 3) {
      if (!paymentMethod) newErrors.paymentMethod = "Please select a payment method"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1)
    }
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateStep(step)) {
      setIsLoading(true)
      // Simulating an API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsLoading(false)
      alert("Thank you for your donation!")
      // Reset form here if needed
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
            <h2 className="text-2xl font-semibold mb-6">Choose Your Donation Level</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {donationOptions.map((option) => (
                <DonationOption
                  key={option.id}
                  {...option}
                  selected={selectedOption === option.id}
                  onSelect={() => setSelectedOption(option.id)}
                />
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Or Enter a Custom Amount</h3>
              <div className="flex items-center">
                <span className="text-2xl mr-2">$</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedOption(null)
                  }}
                  className="w-full p-2 border rounded-lg text-2xl"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Gift Frequency</h3>
              <div className="flex space-x-4">
                {["one-time", "monthly", "annually"].map((frequency) => (
                  <button
                    key={frequency}
                    className={`px-4 py-2 rounded-lg ${
                      giftFrequency === frequency ? "bg-blue-950 text-white" : "bg-gray-200 text-gray-800"
                    }`}
                    onClick={() => setGiftFrequency(frequency)}
                  >
                    {frequency.charAt(0).toUpperCase() + frequency.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {errors.amount && <p className="text-red-500 mb-4">{errors.amount}</p>}
          </motion.div>
        )
      case 2:
        return (
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
            <h2 className="text-2xl font-semibold mb-6">Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={personalInfo.firstName}
                  onChange={handlePersonalInfoChange}
                  placeholder="First Name"
                  className="w-full p-2 border rounded-lg"
                  required
                />
                {errors.firstName && <p className="text-red-500 mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={personalInfo.lastName}
                  onChange={handlePersonalInfoChange}
                  placeholder="Last Name"
                  className="w-full p-2 border rounded-lg"
                  required
                />
                {errors.lastName && <p className="text-red-500 mt-1">{errors.lastName}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={personalInfo.email}
                  onChange={handlePersonalInfoChange}
                  placeholder="Email Address"
                  className="w-full p-2 border rounded-lg"
                  required
                />
                {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="number"
                  name="graduationYear"
                  value={personalInfo.graduationYear}
                  onChange={handlePersonalInfoChange}
                  placeholder="Graduation Year"
                  className="w-full p-2 border rounded-lg"
                  required
                />
                {errors.graduationYear && <p className="text-red-500 mt-1">{errors.graduationYear}</p>}
              </div>
            </div>
          </motion.div>
        )
      case 3:
        return (
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
            <h2 className="text-2xl font-semibold mb-6">Select Payment Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {paymentMethods.map((method) => (
                <PaymentMethodOption
                  key={method.id}
                  {...method}
                  selected={paymentMethod === method.id}
                  onSelect={() => setPaymentMethod(method.id)}
                />
              ))}
            </div>
            {errors.paymentMethod && <p className="text-red-500 mb-4">{errors.paymentMethod}</p>}
          </motion.div>
        )
      case 4:
        return (
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
            <h2 className="text-2xl font-semibold mb-6">Confirm Your Donation</h2>
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Donation Summary</h3>
              <p className="text-lg mb-2">
                Amount: $
                {selectedOption
                  ? donationOptions.find((option) => option.id === selectedOption).amount
                  : customAmount || 0}
              </p>
              <p className="text-lg mb-2">Frequency: {giftFrequency}</p>
              <p className="text-lg mb-2">
                Donor: {personalInfo.firstName} {personalInfo.lastName}
              </p>
              <p className="text-lg mb-2">Email: {personalInfo.email}</p>
              <p className="text-lg mb-2">Graduation Year: {personalInfo.graduationYear}</p>
              <p className="text-lg">
                Payment Method: {paymentMethod && paymentMethods.find((method) => method.id === paymentMethod).title}
              </p>
            </div>
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen mt-20 bg-gray-100 py-12">
      <main className="container mx-auto px-4">
        <h1 className="text-4xl text-blue-950 font-bold text-center mb-8">Support Your Alma Mater</h1>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`w-1/4 text-center ${step === stepNumber ? "text-blue-950" : "text-gray-400"}`}
                >
                  <div
                    className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
                      step >= stepNumber ? "bg-blue-950 text-white" : "bg-gray-200 text-blue-950"
                    }`}
                  >
                    {stepNumber}
                  </div>
                  <p className="mt-2">
                    {stepNumber === 1 && "Amount"}
                    {stepNumber === 2 && "Info"}
                    {stepNumber === 3 && "Payment"}
                    {stepNumber === 4 && "Confirm"}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-blue-950 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <motion.button
                  type="button"
                  onClick={handlePrevStep}
                  className="bg-gray-300 text-blue-950 px-6 py-2 rounded-lg text-lg font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Previous
                </motion.button>
              )}
              {step < 4 ? (
                <motion.button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-blue-950 text-white px-6 py-2 rounded-lg text-lg font-semibold ml-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Next
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg text-lg font-semibold ml-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Complete Donation"}
                </motion.button>
              )}
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Donation

