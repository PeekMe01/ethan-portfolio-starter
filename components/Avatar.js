// next image
import Image from "next/image";
import img from '../public/avatar1.png'

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={img} width={737} height={678} alt="" className="translate-z-0 w-full h-full"/>
  </div>
};

export default Avatar;
