'use client'

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from "@/lib/utils"
import { CaseColor } from "@prisma/client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const PhonePreview = ({ croppedImageUrl, color }: {
  croppedImageUrl: string,
  color: CaseColor
}) => {
  const ref = useRef<HTMLDivElement>(null);

  let casebackgroundColor = "bg-zinc-950";
  if(color === "blue") casebackgroundColor = "bg-blue-950"
  if(color === "rose") casebackgroundColor = "bg-rose-950"
  if(color === "green") casebackgroundColor = "bg-green-950"

  const [renderedDimensions, setRenderedDimensions] = useState({
    height: 0,
    width: 0,
  }); 

  const handleResize = () => {
    if(!ref.current) return 
    const { width, height } = ref.current.getBoundingClientRect();
    setRenderedDimensions({ width, height })
  }

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [])
  
  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
      <div className="absolute z-20 scale-[1.0352]" style={{
        left: renderedDimensions.width / 2 - renderedDimensions.width / (1216 / 121),
        top: renderedDimensions.height / 6.22
      }}>
        <Image 
          width={renderedDimensions.width / (3000 / 637)}
          height={renderedDimensions.height}
          src={croppedImageUrl}
          alt="phoneimg"
          className={cn("phone-skew relative z-20 rounded-t-[15px] rounded-b-[10px] md:rounded-t-[30xp] md:rounded-b-[20px]", casebackgroundColor)}
        />
      </div>

      <div className="relative h-full w-full z-40">
        <Image 
          alt="phone"
          src="/clearphone.png"
          className="pointer-events-none h-full w-full antialiased rounded-md"
          width={3000}
          height={2001}
        
        />
      </div>
    </AspectRatio>
  )
}

  

export default PhonePreview