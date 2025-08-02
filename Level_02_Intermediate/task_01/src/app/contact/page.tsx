'use client'

import React , {useState , ChangeEvent , FormEvent} from "react"

interface FormDataType {
    name: string , 
    email :string
}

const Contact = () => {
    const [FormData , setFormData] = useState<FormDataType>({
        name: "",
        email: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name , value} = e. target;
        setFormData((prevData) => ({
            ...prevData,
            [name]:value,
        }));
    };

    const handleSubmit = (e :FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form data Submitte:d", FormData);
        alert("Thank you for reaching out!");
        setFormData({
            name:"",
            email: "",
        });
    }
        return (
            <div className="flex justify-center items-center p-6 mt-16 ">
              <div className=" p-8 rounded-lg bg-yellow-200 shadow-lg shadow-black w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black">
                      Name :
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={FormData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-black rounded-md shadow-sm sm:text-sm"
                      required
                    />
                  </div>
        
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black">
                      Email :
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={FormData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-b-black rounded-md shadow-sm  sm:text-sm"
                      required
                    />
                  </div>
        
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-yellow-300 hover:bg-yellow-100 text-black font-medium rounded-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          );
}



export default Contact
