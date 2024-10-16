import Image from "next/image"
const Footer = () => {
  return (
    <>
    <footer className="flex flex-col space-y-10 justify-center m-10">


<div className="flex justify-center space-x-5">
    <a href="https://www.facebook.com/abdurrehman1722" target="_blank" rel="noopener noreferrer">
        <Image alt="social-icons" width={30} height={30}  src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
    </a>
    <a href="https://www.linkedin.com/in/abdur-rehman-ashraf/" target="_blank" rel="noopener noreferrer">
        <Image alt="social-icons" width={30} height={30} src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
    </a>
    <a href="https://www.instagram.com/a_rehman.gujjar/" target="_blank" rel="noopener noreferrer">
        <Image alt="social-icons" width={30} height={30} src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </a>
    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
        <Image alt="social-icons" width={30} height={30} src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <Image alt="social-icons" width={30} height={30} src="https://img.icons8.com/fluent/30/000000/twitter.png" />
    </a>
</div>
<p className="text-center text-gray-700 font-medium">&copy; 2024 AbdurRehman  All rights reservered.</p>
</footer>
    </>
  )
}

export default Footer