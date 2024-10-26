"use client";

import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+88) 01747 065084",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "gopalbasak2324@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Brottrish, Kishoreganj, Bangladesh - 2300",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none ">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem consectetur tempore a deserunt placeat ullam beatae
                dolorem sint.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  className="rounded-xl"
                  type="firstname"
                  placeholder="First Name"
                />
                <Input
                  className="rounded-xl"
                  type="lastname"
                  placeholder="Last Name"
                />
                <Input
                  className="rounded-xl"
                  type="email"
                  placeholder="Email"
                />
                <Input
                  className="rounded-xl"
                  type="phone"
                  placeholder="Phone number"
                />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="graphic">Graphic Design</SelectItem>
                    <SelectItem value="googleAds">Google Ads</SelectItem>
                    <SelectItem value="msOffice">Ms Office</SelectItem>
                  </SelectGroup>
                </SelectContent>

              </Select>

                 {/* textarea */}
                 <Textarea className="h-[200px]  " 
                    placeholder="Type your message here."
                    />

                    {/* btn */}
                    <Button size="md" className="max-w-36 py-2 hover:text-white/65" >Send message</Button>

            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
                {
                    info.map((item, index)=>{
                        return (
                            <li className="flex items-center gap-6 " key={index}>
                                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
                                    <div className="text-[28px]">{item.icon}</div>
                                </div>
                                <div className="fle1">
                                    <p className="text-white/60">{item.title}</p>
                                    <h3 className="text-xl">{item.description}</h3>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
