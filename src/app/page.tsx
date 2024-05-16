// Next
import Image from "next/image";
import Link from "next/link";
import React from "react";

//Lucide React
import { ArrowRight, Check, Star } from "lucide-react";
// Constants
import { CheckList, CheckStrengths, Testimonials, Users } from "@/constants/landing-page-constants";

//Components
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Phone from "@/components/phone";
import { Icons } from "@/components/icons";
import {Reviews} from "@/components/reviews";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image src="/snake-1.png" width={623} height={824} alt="snake" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case
                CaseCobra allows you to protect your memories, not jsut your phone case.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  {CheckList.map((check) => (
                    <li className="flex gap-1.5 items-center text-left" key={check.key}>
                      <span className="text-green-600">{check.icon}</span>
                      {check.text}
                    </li>
                  ))}

                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-center gap-5">
                <div className="flex -space-x-4">
                  {Users.map((users) => (
                    <Image
                      className="inline-block rounded-full ring-slate-100"
                      src={users.src}
                      alt="user-1"
                      width={40}
                      height={40}
                      key={users.label}
                    />)
                  )}
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="w-4 h-4 text-green-600 fill-green-600" />
                    ))}
                  </div>

                  <p>
                    <span className="font-semi-bold">1,250</span>{" "}
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <Image
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block" alt="yourname"
                width={619}
                height={428}
              />
              <Image
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
                alt="line"
                width={339}
                height={608}
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Value Proposistion Section */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center  text-balance !leading-tight font-bold text-5xl md:text-6xl" >
              What Our <span className="relative px-2">Customers{" "}<Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" /></span>{" "}Say
            </h2>
            <Image
              src="/snake-2.png"
              className="w-24 order-0 lg:order-2"
              width={761}
              height={675}
              alt="snake2"
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-54 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            {Testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-auto flex-col gap-4 lg:pr8 xl:pr-20">
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-green-600 fill-green-600"
                    />
                  ))}
                </div>
                <div className="text-lg leading-8">
                <p>
                  {testimonial.textParts ? (
                    testimonial.textParts.map((part, i) => (
                      <React.Fragment key={i}>{part}</React.Fragment>
                    ))
                  ) : (
                    null
                  )}
                </p>
                </div>
                <div className="flex gap-4 mt-2">
                  <Image
                    className="rounded-full h-12 w-12 object-cover"
                    src={testimonial.user.src}
                    alt={testimonial.user.name}
                    height={40}
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">{testimonial.user.name}</p>
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      {testimonial.user.verified && (
                        <>
                          <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                          <p className="text-sm">Verified Purchase</p>
                        </>
                      )}
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
            <div className="mb-12 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center`">
              <h2 className="order-1 mt-2 tracking-tight text-center  text-balance !leading-tight font-bold text-5xl md:text-6xl" >
              Upload Your Photo And Get Your Own <span className="relative px-2 bg-green-600 text-white">Case<Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" /></span>{" "}Now
                </h2>
              </div>
            </div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8 ">
              <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
                <Image 
                  src="/arrow.png"
                  className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
                  alt="arrow"
                  width={126}
                  height={31}
                />
                <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                  <Image 
                    src="/horse.jpg"
                    alt="horse"
                    width={853}
                    height={1280}
                    className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                  />
                </div>

                <Phone className="w-60" imgSrc="/horse_phone.jpg"/>
              </div>  
            </div>

            <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
              <div className="w-fit">
                {CheckStrengths.map((check) => (
                    <li className="flex gap-1.5 items-center text-left" key={check.key}>
                      <span className="text-green-600">{check.icon}</span>
                      {check.text}
                    </li>
                  ))}
              </div>

              <div className="flex justify-center">
                <Link className={buttonVariants({
                  size: "lg", 
                  className: "mx-auto mt-8"
                })} href="/configure/upload"> 
                  Creat Your Case Now
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Link>
              </div>
            </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
