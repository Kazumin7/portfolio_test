import Image from 'next/image'
import { assets } from '@/assets/assets'
import React, { useState, FormEvent } from 'react'
import { motion } from "motion/react"

const Contact = () => {
    const [result, setResult] = useState<string>("");

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "e3c4d728-083a-4d19-9e33-273457e52aff");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                (event.target as HTMLFormElement).reset();
            } else {
                console.log("Error", data);
                setResult(data.message || "An error occurred");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResult("Network error. Please try again.");
        }
    };

    return (
        <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/foot-bg-color.png")] bg-no-repeat bg-center
        bg-[length:90%-auto]'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
            <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
            
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Yoooo hmu dawggggg
            </p>

            <motion.form
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.9}}
            onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-auto-fit gap-6 mt-10 mb-8'>
                    <motion.input 
                        initial={{x: -50, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 1.1, delay: 0.6}}
                        type="text" 
                        name="name"
                        placeholder="Please enter your name" 
                        required 
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                    />
                    <motion.input 
                        initial={{x: 50, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 1.2, delay: 0.6}}
                        type="email" 
                        name="email"
                        placeholder="Please enter your email" 
                        required 
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
                    />
                </div>
                <motion.textarea 
                    initial={{y: 100, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 1.3, delay: 0.9}}
                    rows={6} 
                    name="message"
                    placeholder="Please enter your message" 
                    required 
                    className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'
                />

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    type='submit'
                    className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'
                >
                    Submit now 
                    <Image src={assets.right_arrow_white} alt='' className='w-4'/>
                </motion.button>

                <p className='mt-4 text-center'>{result}</p>
            </motion.form>
        </div>
    )
}

export default Contact