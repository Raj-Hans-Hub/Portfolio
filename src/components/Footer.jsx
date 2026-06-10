import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaWhatsapp } from 'react-icons/fa'
const Footer = () => {

  const [loading,setLoading]=useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",

  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!form.name.trim() ||!form.email.trim()){
      alert("Name aur Email required")
      return;
    }
    setLoading(true);

    emailjs.send(
      "service_zaukoyc",
      "template_0g9cjel",
      {
        name: form.name,
        email: form.email,
        title: "rajkumar"
      },
      "nNeptjp6k_Wpnh0Cm"
    );
    alert("please wait....")

    emailjs.send(
      "service_zaukoyc",
      "template_bv7ppya",
      {
        name: form.name,
        email: form.email,
        title: "hello !"
      },
      "nNeptjp6k_Wpnh0Cm"
    )
    .then(() => {
      alert("Masage Send Successfully");
      setForm({
        name: "",
        email: "",
      });

    })
  .catch((error) => {
    alert("Email Send Faild");
    console.log(error);

  }) 
  .finally(()=>{
    setLoading(false);
  });
    
  };

return (
  <>
    <footer id='contect' className='container mx-auto'>
      <div  className='text-start ms-15  text-4xl font-serif  ' id='skills'>CONTECT</div>
      <div className="  container mx-auto flex flex flex-col justify-center items-center md:flex-row ">
        <div className="  flex flex-col p-3 w-full">
          <form onSubmit={handleSubmit}>

            <input type="text" onChange={(e) => { setForm({ ...form, name: e.target.value }) }} value={form.name} placeholder='Enter Your Name' className='border m-3 p-1 rounded-l w-3/4' />
            <input type="email" onChange={(e) => { setForm({ ...form, email: e.target.value }) }} value={form.email} placeholder='Enter Your Email Id' id="" className='border p-1 m-3 w-3/4 rounded-l' />
            <input type="submit" value={loading ?"Sending":"Send" } disabled={loading || !form.name.trim() ||!form.email.trim()} name="" className=' disabled:bg-gray-800 border p-1 bg-blue-900  m-3 w-1/4 rounded-l hover:cursor-pointer hover:font-bold hover:bg-blue-400' />
          </form>

        </div>
        <div className="   p-3 w-full font-serif borde flex justify-end items-end">

          <div class=" text-5xl p-4 flex justify-end  gap-x-4">

            <address> <a href="mailto:mahadevheighs9999@gmail.com"><img src={`${import.meta.env.BASE_URL}mail.jpeg`} alt="" className='w-[80px] h-[80px] rounded-2xl border-gray-700 border-3 shadow-[0px_0px_12px_white] hover:shadow-[0px_0px_20px_white] hover:border-6 ' /></a></address>
            <address> <a href="https://wa.me/9351167484?text=hello%20Raj" target='_blank'><img src={`${import.meta.env.BASE_URL}whatshapp.jpeg`} alt="" className='w-[80px] h-[80px] rounded-2xl border-gray-700 border-3 shadow-[0px_0px_12px_white] hover:shadow-[0px_0px_20px_white] hover:border-6 ' /></a></address>
            <address> <a href="https://wa.me/9351167484?text=hello%20Raj" target='_blank'><img src={`${import.meta.env.BASE_URL}github.jpeg`} alt="" className='w-[80px] h-[80px] rounded-2xl border-gray-700 border-3 shadow-[0px_0px_12px_white] hover:shadow-[0px_0px_20px_white] hover:border-6 ' /></a></address>

            


          </div>

        </div>
      </div>
    </footer>
  </>
)
}

export default Footer
