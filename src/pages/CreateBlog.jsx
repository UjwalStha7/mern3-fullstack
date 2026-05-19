import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
    const navigate = useNavigate()
    /*const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");*/
    const [data, setData] = useState({
        title: "",
        subtitle: "",
        image: "",
        description: ""
    })
    const handleChange = (e) => {
        // const value = e.target.value
        // const name = e.target.name
        const {value, name} = e.target;
        /*
            name = title, value = ujwal
            name = subtitle, value = ujwal shrestha
        */
        setData({
            ...data, //if data is already present then leave as it is and only update the value which is changing
            [name]: name === "image" ? e.target.files[0] : value //if name is image then we want to set the value as file else we want to set the value as text
        })
    }

    const createBlog = async (e) => {
        e.preventDefault() //prevent data going from url and refeshing the page
        const response = await axios.post('https://mern3-project.onrender.com/blog', data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        if(response.status === 200){
            navigate('/')
        }else{
            alert('Error Creating Blog')
        }
    }

  return (
    <>
        <Navbar />
        <div className="mx-14  border-2 border-blue-400 rounded-lg mt-20">
            <div className="mt-10 text-center font-bold">Wanna make Blog ?</div>
            <div className="mt-3 text-center text-4xl font-bold">Create Blog</div>
            <form onSubmit={createBlog}>
                <div className="p-8">
                    <div className="flex gap-4">
                    <input type="text" name="title" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholderSlate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Title" onChange={handleChange}/>
                    <input type="text" name="subtitle" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholderSlate-400 shadow-sm placeholder:font-semibold placeholderText-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Subtitle" onChange={handleChange}/>
                    </div>
                    <div className="my-6 flex gap-4">
                    <input type="file" name="image" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholderSlate-400 shadow-sm placeholder:font-semibold placeholderText-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" onChange={handleChange}/>
                    </div>
                    <div className="">
                    <textarea name="description" id="text" cols="30" rows="10" className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300" onChange={handleChange} defaultValue="Description"></textarea>
                    </div>
                    <div className="text-center">
                    <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Create Blog</button>
                    </div>
                </div>
            </form>
        </div>
    </>
  );
}

export default CreateBlog