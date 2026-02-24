"use client";

import { useState } from "react";
import Image from "next/image";

export default function InstituteListPage() {
  const [formData, setFormData] = useState({
    instituteName: "",
    instituteType: "",
    instituteStrength: "",
    address: {
      houseNo: "",
      streetLocality: "",
      landmark: "",
    },
    emailAddress: "",
    phoneNo: "",
    instituteDescription: "",
    image: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        image: e.target.files![0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("instituteName", formData.instituteName);
      formDataToSend.append("instituteType", formData.instituteType);
      formDataToSend.append("instituteStrength", formData.instituteStrength);
      formDataToSend.append("houseNo", formData.address.houseNo);
      formDataToSend.append("streetLocality", formData.address.streetLocality);
      formDataToSend.append("landmark", formData.address.landmark);
      formDataToSend.append("emailAddress", formData.emailAddress);
      formDataToSend.append("phoneNo", formData.phoneNo);
      formDataToSend.append("instituteDescription", formData.instituteDescription);

      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      const response = await fetch("/api/submit-institute/", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage({
          type: "success",
          text: "Thank you! Your institute has been submitted successfully. We will review and get back to you soon.",
        });
        // Reset form
        setFormData({
          instituteName: "",
          instituteType: "",
          instituteStrength: "",
          address: {
            houseNo: "",
            streetLocality: "",
            landmark: "",
          },
          emailAddress: "",
          phoneNo: "",
          instituteDescription: "",
          image: null,
        });

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setSubmitMessage({
          type: "error",
          text: result.message,
        });
      }
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "Failed to submit. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Success Message Banner */}
      {submitMessage && submitMessage.type === "success" && (
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-6 px-4 shadow-lg">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              🎉 Thank You!
            </h2>
            <p className="text-lg">{submitMessage.text}</p>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 mb-6 sm:mb-8">
          <div className="max-w-2xl w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">
              List Your Institute With Us
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
              Nowadays, Students Search Online For Information Before Selecting
              Their Study Location. If Your Institute Does Not Appear Online,
              You Could Be Losing Admission Opportunities.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-relaxed">
              Add Your Institute To Radical Education And Reach The Students
              That Are Looking For Courses Like Yours. We Handle Everything, Its
              Simple And Effective.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 font-semibold mb-2 sm:mb-3 md:mb-4">We Do This By:</p>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">•</span>
                <span>Get Students Interested In It More</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">•</span>
                <span>
                  Enhance Your Online Presence Without Having To Spend More On
                  Marketing
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex-shrink-0">•</span>
                <span>
                  Use Reviews, Pictures And Confirmed Details To Establish Trust
                  - Save Time By Allowing Us To Develop And Manage A Profile On
                  Your Behalf.
                </span>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block flex-shrink-0">
            <Image
              src="/logo.webp"
              alt="Radical Education"
              width={300}
              height={120}
              className="object-contain"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-gradient-to-br from-[#0B5F8C] to-[#0A4A6E] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden">
          {/* Decorative circles */}
          {/* <div className="absolute top-0 left-0 w-64 h-64 border-[40px] border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 border-[30px] border-white/10 rounded-full -translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/2 right-0 w-56 h-56 border-[35px] border-white/10 rounded-full translate-x-1/3"></div> */}

          {/* Left Bottom Image - Hidden on mobile */}
          <div className="hidden md:block absolute -bottom-30 -left-15 w-64 h-64 lg:w-96 lg:h-96 opacity-20 md:opacity-100">
            <Image
              src="/images/institute.webp"
              alt="Institute"
              fill
              className="object-contain"
            />
          </div>

          {/* Right Top Image - Hidden on mobile */}
          <div className="hidden md:block absolute -top-27 -right-40 w-64 h-64 lg:w-96 lg:h-96 opacity-20 md:opacity-100">
            <Image
              src="/images/institute.webp"
              alt="Education"
              fill
              className="object-contain"
            />
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 max-w-4xl mx-auto">
            {/* Error Message */}
            {submitMessage && submitMessage.type === "error" && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-white text-sm sm:text-base">
                {submitMessage.text}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-6">
              {/* Institute name */}
              <div>
                <label className="block text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Institute name</label>
                <input
                  type="text"
                  name="instituteName"
                  value={formData.instituteName}
                  onChange={handleInputChange}
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/20 border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  style={{ color: 'white' }}
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Email Address</label>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/20 border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  style={{ color: 'white' }}
                  required
                />
              </div>

              {/* Institute type */}
              <div>
                <label className="block text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Institute type</label>
                <input
                  type="text"
                  name="instituteType"
                  value={formData.instituteType}
                  onChange={handleInputChange}
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/20 border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  style={{ color: 'white' }}
                  required
                />
              </div>

              {/* Phone no */}
              <div>
                <label className="block text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Phone no</label>
                <input
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleInputChange}
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/20 border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  style={{ color: 'white' }}
                  required
                />
              </div>

              {/* Institute strength */}
              <div>
                <label className="block text-white mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Institute strength
                </label>
                <input
                  type="text"
                  name="instituteStrength"
                  value={formData.instituteStrength}
                  onChange={handleInputChange}
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/20 border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  style={{ color: 'white' }}
                  required
                />
              </div>

              {/* Institute Description */}
              <div className="md:row-span-2">
                <label className="block text-white mb-1.5 sm:mb-2 text-sm sm:text-base">
                  Institute Description
                </label>
                <textarea
                  name="instituteDescription"
                  value={formData.instituteDescription}
                  onChange={handleInputChange}
                  placeholder="Tell us about your institute"
                  rows={5}
                  className="form-textarea w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/20 border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  style={{ color: 'white' }}
                  required
                ></textarea>
                <div className="mt-3 sm:mt-4">
                  <label
                    htmlFor="imageUpload"
                    className="block w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border-2 border-dashed border-white/50 text-white text-center cursor-pointer hover:bg-white/10 transition-colors"
                  >
                    Upload Image
                  </label>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  {formData.image && (
                    <p className="text-white/80 text-xs sm:text-sm mt-2 break-all">
                      {formData.image.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div className="md:col-span-1">
                <label className="block text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Address</label>
                <input
                  type="text"
                  name="address.houseNo"
                  value={formData.address.houseNo}
                  onChange={handleInputChange}
                  placeholder="House No./Building No."
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/20 border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50 mb-2 sm:mb-3"
                  required
                />
                <input
                  type="text"
                  name="address.streetLocality"
                  value={formData.address.streetLocality}
                  onChange={handleInputChange}
                  placeholder="Street/Locality"
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/20 border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50 mb-2 sm:mb-3"
                  required
                />
                <input
                  type="text"
                  name="address.landmark"
                  value={formData.address.landmark}
                  onChange={handleInputChange}
                  placeholder="Landmark"
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white/20 border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50 mb-2 sm:mb-3"
                  style={{ color: 'white' }}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-12 sm:px-20 md:px-32 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-[#0077BF] to-[#63CDB4] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}