import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form onSubmit='' className="w-full mx-auto space-y-6 bg-gradient-to-t from-gray-1000 via-gray-800 to-transparent shadow-[0px_5px_24px_0px_rgba(253,253,253,0.2)] py-4 px-4  rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm tracking-wide text-gray-400 uppercase"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-3 bg-[#22262a] border border-gray-800 rounded-sm focus:outline-none focus:border-gray-700 text-gray-300"
            //   value={formData.name}
            //   onChange={(e) =>
            //     setFormData({ ...formData, name: e.target.value })
            //   }
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="block text-sm tracking-wide text-gray-400 uppercase"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full px-4 py-3 bg-[#22262a] border border-gray-800 rounded-sm focus:outline-none focus:border-gray-700 text-gray-300"
            //   value={formData.phone}
            //   onChange={(e) =>
            //     setFormData({ ...formData, phone: e.target.value })
            //   }
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm tracking-wide text-gray-400 uppercase"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-3 bg-[#22262a] border border-gray-800 rounded-sm focus:outline-none focus:border-gray-700 text-gray-300"
            // value={formData.email}
            // onChange={(e) =>
            //   setFormData({ ...formData, email: e.target.value })
            // }
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="block text-sm tracking-wide text-gray-400 uppercase"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className="w-full px-4 py-3 bg-[#22262a] border border-gray-800 rounded-sm focus:outline-none focus:border-gray-700 text-gray-300"
            // value={formData.subject}
            // onChange={(e) =>
            //   setFormData({ ...formData, subject: e.target.value })
            // }
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm tracking-wide text-gray-400 uppercase"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-3 bg-[#22262a] border border-gray-800 rounded-sm focus:outline-none focus:border-gray-700 text-gray-300 resize-none"
            // value={formData.message}
            // onChange={(e) =>
            //   setFormData({ ...formData, message: e.target.value })
            // }
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 text-sm tracking-wide text-gray-300 uppercase transition-colors duration-300 bg-[#22262a] border border-gray-800 rounded-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
