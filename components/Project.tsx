export default function Project() {
  return (
    <li className="bg-white flex flex-col py-6 pr-[25px] pl-[23px] border border-border/15 cursor-pointer hover:border-border/25 hover:shadow-[0px_12px_20px_0px_rgba(0,0,0,0.07)] hover:scale-110 transition-all duration-[0.3]">
      <img
        className="w-[238px] h-[238px] relative object-cover"
        loading="eager"
        alt=""
        src="/project.png"
      />
    </li>
  )
}