'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
function Thanks() {
    const router = useRouter()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        router.push('/')
      }
    
  return (
    <>
    <div className="h-screen w-full bg-black dark:bg-gray-100">
    <div className="h-full lg:w-[60%] sm:w-[80%] xs:w-[90%] mx-auto flex gap-8 items-center">
        <div
            className="flex flex-col gap-4 text-white dark:text-black p-4 rounded-lg border border-green-300 shadow-xl shadow-green-400/30">
            <h5 className="text-sm text-green-500 font-semibold">Abdur Rehman</h5>
            <div className="w-full flex gap-2 items-center justify-around">
                <div className="text-5xl font-semibold uppercase font-serif">Thank You</div>
                <hr className="w-[50%] h-1 rounded-full border-t-green-500 bg-green-500" />
            </div>

            <p className="text-sm">Thank you for taking the time to share your thoughts and suggestions! Your input is incredibly important to me, and I look forward to connecting with you soon. I will review your message and respond as quickly as I can!
            </p>

            <div className="flex gap-4 justify-center">
                <button className="w-full px-4 py-1 border-2 border-green-500 rounded-sm" onClick={(e)=>handleClick(e)}>Home page</button>
                <button className="w-full text-white px-4 py-1 bg-green-500 rounded-sm"><Link target="_blank" href={"https://wa.me/3369999035"}>Contact me</Link></button>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Thanks