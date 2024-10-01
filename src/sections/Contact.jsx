import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }

    //service_fklloze

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try{
            await emailjs.send(
                'service_fklloze', 
                'template_cppacdy',
                {
                    from_name: form.name, 
                    to_name: 'Cherrie',
                    from_email: form.email,
                    to_email: 'cherrietenmore@gmail.com',
                    message: form.message
                },
            'o34pYJkDm60j0QX3W')
            setLoading(false);
            alert('Your message has been sent!')
            setForm({
                name:'',
                email:'',
                message:''
            });

        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong!')

        }
        

    }

  return (
    <section className="c-space my-20" id="contact">
        <div className="relative min-h-screen flex items-center justify-start flex-col">
            <h3 className="head-text">Contact Me</h3>
            <div className="contact-container">
                <div className="border border-black-300 bg-black-200 rounded-lg w-full p-8">
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input 
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Cherrie Chen"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input 
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="cherrietenmore@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">You Message</span>
                            <textarea 
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                row={5}
                                className="field-input"
                                placeholder="Hi, I'm interested in..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading? 'Sending...' : 'Send Message'}
                        </button>

                    </form>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Contact