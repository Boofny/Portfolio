import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const email = "mailto:brandonromero7557@icloud.com"
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(form);

    // Send to backend or email service here

    alert("Message sent!");
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen text-white p-8 pt-25">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Contact Me
        </h1>

        <p className="text-gray-400 mb-8">
          Have a question or want to work together?
          Send me a message below.
          <br />
          At: <a className="text-blue-400 underline" href={email}>brandonromero7557@icloud.com</a>
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 rounded bg-OneDarkGray border border-zinc-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 rounded bg-OneDarkGray border border-zinc-700"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            required
            className="p-3 rounded bg-neutral-900 border border-neutral-700 resize-none"
          />

          <button
            type="submit"
            className="bg-OneGreen hover:bg-OneYellow transition p-3 text-xl rounded font-semibold text-black"
          >

            Send Message
          </button>
        </form>

        <button
          onClick={() => navigate("/homepage")}
          className="mt-6 text-gray-400 hover:text-white"
        >
          ← Back Home
        </button>
      </div>
    </div>
  );
}

export default Contact;
