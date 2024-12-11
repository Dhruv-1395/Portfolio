import React,{useState} from "react";
import axios from 'axios'
import { toast } from 'react-hot-toast';
import Spinner from 'react-bootstrap/Spinner';
const ContactForm = () => {
  const [fname, setFname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [issendmail,setIsSendMail] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!fname ||!phone ||!email ||!subject ||!message){
      toast.error('All fields are required');
      return;
    }
    setIsSendMail(false);
    const data = await axios.post('https://portfolio-utz0.onrender.com/api/contact',{fname:fname,phone:phone,email:email,subject:subject,message:message})
    .then(res =>{
        if(res.data.message){
        toast.success(res.data.message);
        setIsSendMail(true);
        setFname('');
        setPhone('');
        setEmail('');
        setSubject('');
        setMessage('');
        }
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
      <form id="contact-form" onSubmit={handleSubmit} className="w-full text-[20px] mx-auto space-y-6 bg-gradient-to-t from-gray-1000 via-gray-800 to-transparent shadow-[0px_0px_24px_1px_rgba(253,253,253,0.2)] py-4 px-4  rounded-3xl">
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
              name="fname"
              className="w-full px-4 py-2 bg-[#191B1E] shadow rounded-lg focus:outline-none focus:border-gray-700 
              text-gray-300"
              value={fname}
              onChange={(e) =>
                setFname( e.target.value )
              }
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
              name="phone"
              className="w-full px-4 py-2 bg-[#191B1E] shadow rounded-lg focus:outline-none focus:border-gray-700 text-gray-300"
              value={phone}
              onChange={(e) =>
                setPhone( e.target.value )
              }
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
            name="email"
            className="w-full px-4 py-2 bg-[#191B1E] shadow rounded-lg focus:outline-none focus:border-gray-700 text-gray-300"
            value={email}
              onChange={(e) =>
                setEmail( e.target.value )
              }
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
            name="subject"
            className="w-full px-4 py-2 bg-[#191B1E] shadow rounded-lg focus:outline-none focus:border-gray-700 text-gray-300"
            value={subject}
            onChange={(e) =>
              setSubject( e.target.value )
            }
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
            name="message"
            className="w-full px-4 py-2 bg-[#191B1E] shadow rounded-lg focus:outline-none focus:border-gray-700 text-gray-300 resize-none"
            value={message}
              onChange={(e) =>
                setMessage( e.target.value )
              }
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 text-sm tracking-wide text-gray-300 uppercase transition-colors  bg-[#191B1E] rounded-lg hover:-translate-y-3 focus:outline-none focus:ring-2 shadow "
        >
          {
            (!issendmail)? (
              <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            ) : (
              "Send"
            )
          }

        </button>
      </form>
    </div>
  );
};

export default ContactForm;
