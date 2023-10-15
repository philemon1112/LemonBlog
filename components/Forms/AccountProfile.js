"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import { isBase64Image } from '@/lib/utils';
import { useUploadThing } from '@/lib/uploadthing';
import { updateUser } from '@/lib/actions/user.actions';
import { usePathname, useRouter } from 'next/navigation';
import { Toaster, toast } from 'sonner';

function AccountProfile({user}) {
    const [loading, setLoading] = useState(false)
    const [files, setFiles] = useState([]);
    const [imagePreview, setImagePreview] = useState(null)
    const [name, setName] = useState(user?.name);
    const [username, setUsername] = useState(user?.username);
    const [bio, setBio] = useState("");

    const {startUpload} = useUploadThing("media");
    const router = useRouter();
    const pathname = usePathname();

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

        await updateUser({
            name: name,
            path: pathname,
            username: username,
            userId: user.id,
            bio: bio,
            image: imagePreview ? imagePreview : user?.image,
          });
  
        toast.success("Account creation done")

        setTimeout(() => {
            setLoading(false);
            if (pathname === "/account/edit") {
                router.back();
            } else {
                router.push("/");
            }
          }, 2000); // 
        
    }

    const handleImage = (e) => {
        e.preventDefault();
      
        const fileReader = new FileReader();
      
        if (e.target.files && e.target.files.length > 0) {
          const file = e.target.files[0];

          // Check if the file size is greater than 3MB (3 * 1024 * 1024 bytes)
          if (file.size > 3 * 1024 * 1024) {
            toast.error('File size exceeds 3MB limit', {
                description: 'Please choose a smaller image',
            })
            e.target.value = ''; // Clear the input field
            return;
          }
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

  return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-start gap-2.5 space-y-1'>
        <div className="flex items-center space-x-6">
            <div className=" bg-black flex  items-center justify-center rounded-full">
            {imagePreview ? (
                <Image
                    src={imagePreview}
                    alt="profile_icon"
                    width={46}
                    height={46}
                    className="w-20 group-hover:w-36 group-hover:h-36 h-20 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                />
            ) : user?.image ? (
                <Image
                src={user?.image}
                alt="profile_icon"
                width={72}
                height={72}
                className="object-cover rounded-full"
                />
            ) : (
                <Image
                src="/Assets/Svg/profile.svg"
                alt="profile_icon"
                width={20}
                height={20}
                className="object-cover"
                />
            )}
            </div>
            <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input type="file" className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-gray-50 file:text-black
                hover:file:bg-gray-100
            "
            onChange={handleImage}
            />
            </label>
        </div>

        <div>
            <label className="leading-7  text-base text-gray-100">Name</label>
            <input 
                id="subject" 
                type="text" 
                required
                placeholder="Subject" 
                className="my-1 py-3 px-4 rounded-md bg-black text-gray-300 w-full outline-none focus:ring-2 focus:ring-gray-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
                >
            </input>
        </div>

        <div>
            <label className="leading-7  text-base text-gray-100">Username</label>
            <input 
                id="subject" 
                required
                type="text" 
                placeholder="Subject" 
                className="my-1 py-3 px-4 rounded-md bg-black text-gray-300 w-full outline-none focus:ring-2 focus:ring-gray-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                >
            </input>
        </div>
        
        <div>
            <label className="leading-7 text-base text-gray-100">Bio</label>
            <textarea 
                id="message" 
                rows="3" 
                required
                placeholder="Say Something"
                className="my-1 py-3 px-4 rounded-md bg-black text-gray-300 w-full outline-none focus:ring-2 focus:ring-gray-600"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
            >
            </textarea>
        </div>  

        <center>
            <button type="submit" className=" w-fit cursor-pointer my-2 py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                {loading ? 
                    (
                        <>
                            <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                            </svg>
                            Loading ...
                        </>
                    )
                :
                    (
                        <span>Continue </span>
                    )
                }
            </button> 
        </center>  
        <Toaster position="top-right" richColors/>           
    </form>
  )
}

export default AccountProfile