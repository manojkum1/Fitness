import { useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const [result, setResult] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Message sent successfully");
        form.reset();
      } else {
        console.error("Form submission failed:", response);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="contact">
      <form className="" onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="access_key"
          value="64985998-718d-4999-8cbe-b4fa611ee55e"
        />
        <input
          type="hidden"
          name="subject"
          value="New Submission from Contact Form"
        />
        <div>
          <label>Name</label>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            name="name"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            name="email"
            required
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white border-2 px-4 py-3 my-8 mx-auto flex items-center transition-all duration-500 hover:bg-blue-900 hover:border-blue-900"
        >
          Let's Collaborate
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
}
