"use client";

import Image from "next/image";
// import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
// import "react-quill/dist/quill.bubble.css";
import { useRouter, usePathname } from "next/navigation";
import { isBase64Image } from '@/lib/utils';
import { useUploadThing } from '@/lib/uploadthing';
import { createPost } from "@/lib/actions/post.actions";

function UploadPost({userId}) {
  const [files, setFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState(null)
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState('')

  const {startUpload} = useUploadThing("media");
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const pathname = usePathname();


//   if (status === "unauthenticated") {
//     router.push("/");
//   }

    const addTag = () => {
        if (tag) {
        setTags([...tags, tag]);
        setTag(''); // Clear the input field
        }
    };

    const removeTag = (index) => {
        const updatedTags = [...tags];
        updatedTags.splice(index, 1);
        setTags(updatedTags);
    };

    const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

      const handleImage = (e) => {
        e.preventDefault();
      
        const fileReader = new FileReader();
      
        if (e.target.files && e.target.files.length > 0) {
          const file = e.target.files[0];
          setFiles(Array.from(e.target.files));
      
          if (!file.type.includes("image")) return;
      
          fileReader.onload = async (event) => {
            const imageDataUrl = event.target?.result?.toString() || "";
            // Set the image data URL for preview
            setImagePreview(imageDataUrl);
          };
      
          fileReader.readAsDataURL(file);
        }
      };

  const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const blob = imagePreview;

        const hasImageChanged = isBase64Image(blob);
        if (hasImageChanged) {
        const imgRes = await startUpload(files);

        if (imgRes && imgRes[0].fileUrl) {
            setImagePreview(imgRes[0].fileUrl)
        }
        }

        await createPost({
            title: title,
            path: pathname,
            author: userId,
            description: description,
            image: imagePreview ,
            category: category,
            tags: tags,
            slug: slugify(title)
          });

        
        setLoading(false)
    if (pathname === "/account/edit") {
        router.back();
    } else {
        router.push("/");
    }

  };
  
  return (
    // <form className="mx-auto max-w-5xl">
      
    //     <div className="flex items-center max-w-3xl mx-auto justify-center w-full">
    //         <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2  border-dashed rounded-lg cursor-pointer bg-black h border-gray-600 hover:border-gray-500 hover:bg-gray-900">
    //             <div className="flex flex-col items-center justify-center pt-5 pb-6">
    //                 <svg className="w-8 h-8 mb-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
    //                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
    //                 </svg>
    //                 <p className="mb-2 text-sm text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
    //                 <p className="text-xs text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
    //             </div>
    //             <input id="dropzone-file" type="file" className="hidden" />
    //         </label>
    //     </div> 

    // </form>
    <form onSubmit={handleSubmit} className="mx-auto grid px-4 max-w-screen-md gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2 pb-4">
        <label   className="mb-2 inline-block text-sm text-gray-300 sm:text-base">Post Title*</label>
        <input name="email" onChange={(e) => setTitle(e.target.value)} className="w-full rounded border bg-[#191919] px-3 py-2 text-gray-100 outline-none border-[#121212] ring-gray-600 transition duration-100 focus:ring" />
      </div>

      <div className="sm:col-span-2 pb-4">
        <label className="mb-2 inline-block text-sm text-gray-300 sm:text-base">Post Tags*</label>
        <div>
          <input
            name="tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="w-2/3 rounded border bg-[#191919] px-3 py-2 text-gray-100 outline-none border-[#121212] ring-gray-600 transition duration-100 focus:ring"
          />
          <button
            type="button"
            onClick={addTag}
            className="inline-block rounded-full bg-gray-100 ml-2 px-6 py-3 text-center text-sm font-semibold text-black outline-none ring-gray-600 transition duration-100 hover:bg-white focus-visible:ring active:bg-white md:text-base"
          >
            Add Tag
          </button>
        </div>
        <ul className="mt-3 ">
          {tags.map((tag, index) => (
            <li key={index} className=" flex mb-2 items-center text-white">
                <div className="bg-black w-fit py-1.5 px-2.5 border border-gray-100 md:py-3 md:px-5 text-white text-sm md:text-base font-medium md:font-semibold rounded-full hover:shadow-lg transition duration-3000 cursor-pointer">
                    <span>{tag}{' '}</span>
                </div>
              <button
                type="button"
                onClick={() => removeTag(index)}
                className="text-red-600 ml-2"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="sm:col-span-2 pb-4">
        <label  className="mb-2 inline-block text-sm text-gray-300 sm:text-base">Post Image*</label>
        <input name="subject" onChange={handleImage} type="file" className="w-full rounded border bg-[#191919] px-3 py-2 text-gray-100 outline-none border-[#121212] ring-gray-600 transition duration-100 focus:ring" />
      </div>

      <div className="sm:col-span-2 pb-4">
        <label  className="mb-2 inline-block text-sm text-gray-300 sm:text-base">Select an option</label>
            <select id="countries" onChange={(e) => setCategory(e.target.value)} className="w-full rounded border bg-[#191919] px-3 py-2 text-gray-100 outline-none border-[#121212] ring-gray-600 transition duration-100 focus:ring">
            <option defaultValue={true}>Choose a category</option>
            <option value="Technology">Technology</option>
            <option value="Food">Food</option>
            <option value="People">People</option>
            <option value="Nature">Nature</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Culture">Culture</option>
            
            </select>
        </div>


      <div className="sm:col-span-2">
        <label className="mb-2 inline-block text-sm text-gray-300 sm:text-base">Message*</label>
        <textarea name="message" onChange={(e) => setDescription(e.target.value)} className="h-64 w-full rounded border bg-[#191919] px-3 py-2 text-gray-100 outline-none border-[#121212] ring-gray-600 transition duration-100 focus:ring"></textarea>
      </div>

      <div className="flex items-center justify-between sm:col-span-2">
        <button className="inline-block rounded-full bg-[#FFF44F] px-8 py-3 text-center text-sm font-semibold text-black outline-none ring-gray-600 transition duration-100 hover:bg-white focus-visible:ring active:bg-white md:text-base">
            {loading ? 
                (
                    <>
                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                        </svg>
                        Creating Post ...
                    </>
                )
                : 
                ( 
                    <span>create post</span>
                )
            }
        </button>

        <span className="text-sm text-gray-500">*Required</span>
      </div>
    </form>
  )
}

export default UploadPost