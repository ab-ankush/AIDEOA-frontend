import React, { useEffect, useRef } from "react";

const Section2 = () => {
  // const l1 = document.getElementById("line1");
  // const l2 = document.getElementById("line2");
  // const l3 = document.getElementById("line3");
  // const setup = (ele, ltr, speed) => {
  //   const call = (entries) => {
  //     const ans = entries[0].isIntersecting;
  //     if (ans) {
  //       document.addEventListener("scroll", scrollhandler);
  //     } else {
  //       document.removeEventListener("scroll", scrollhandler);
  //     }
  //   };
  //   // const object = new IntersectionObserver(call);
  //   const object = new IntersectionObserver(call);
  //   object.observe(ele);

  //   const scrollhandler = () => {
  //     const translateX =
  //       (window.innerHeight - ele.getBoundingClientRect().top) * speed;
  //     if (ltr) {
  //       ele.style.transform = `translateX(${translateX}px)`;
  //     } else {
  //       ele.style.transform = `translateX(-${translateX}px)`;
  //     }
  //   };
  // };
  const l1Ref = useRef(null);
  const l2Ref = useRef(null);
  const l3Ref = useRef(null);

  useEffect(() => {
    const setup = (ele, ltr, speed, ref) => {
      const call = (entries, ltr, speed, ref) => {
        const ans = entries[0].isIntersecting;
        if (ans) {
          window.addEventListener("scroll", () =>
            scrollhandler(ref, ltr, speed)
          );
        } else {
          window.removeEventListener("scroll", () =>
            scrollhandler(ref, ltr, speed)
          );
        }
      };
      const object = new IntersectionObserver((e) => call(e, ltr, speed, ref));
      object.observe(ele);
      window.addEventListener("scroll", () => scrollhandler(ref, ltr, speed));
      return (ref, ltr, speed) => {
        window.removeEventListener("scroll", scrollhandler(ref, ltr, speed));
      };
    };

    // const scrollhandler = (ltr, speed) => {
    //   const translateX =
    //     (window.innerHeight - l1Ref.current.getBoundingClientRect().top) *
    //     speed;
    //   if (ltr) {
    //     l1Ref.current.style.transform = `translateX(${translateX}px)`;
    //   } else {
    //     l1Ref.current.style.transform = `translateX(-${translateX}px)`;
    //   }
    // };
    const scrollhandler = (ref, ltr, speed) => {
      const translateX =
        (window.innerHeight - ref.getBoundingClientRect().top) * speed;
      if (ltr) {
        ref.style.transform = `translateX(${translateX}px)`;
      } else {
        ref.style.transform = `translateX(-${translateX}px)`;
      }
    };

    setup(l1Ref.current, true, 0.5, l1Ref.current);
    setup(l2Ref.current, false, 0.3, l2Ref.current);
    setup(l3Ref.current, true, 0.7, l3Ref.current);
  }, []);
  return (
    <div
      id="sec2"
      class="h-full m-4 overflow-x-hidden max-w-[96%]  flex flex-col justify-center items-center"
    >
      <img src="./images/logo.png" className="w-[100px] h-[100px]" alt="" />
      <div class="dibba my-3">
        {" "}
        <h1 class="flex justify-center items-center font-bold text-[30px]">
          Already team up and moving forward!
        </h1>
      </div>
      <p class="my-3 text-center text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, magni?
      </p>
      <div class="big flex flex-col justify-center items-center gap-10 ">
        <div
          ref={l1Ref}
          id="line1"
          class="medium my-5 -translate-x-[115px] flex gap-5 justify-center items-center sm:hidden"
        >
          {/* line1 start here */}

          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                South Eastern Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Central Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Eastern Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Mahandi Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Bharat Cooking Coal Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                South Eastern Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Central Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Eastern Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Mahandi Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Bharat Cooking Coal Limited
              </p>
            </div>
          </div>

          {/* line1 ends here */}
        </div>
        <div
          id="line2"
          ref={l2Ref}
          class="medium  -translate-x-5 flex gap-5 justify-center items-center lg:my-5"
        >
          {/* line2 start here */}

          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                South Eastern Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Central Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Eastern Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Mahandi Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Bharat Cooking Coal Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                South Eastern Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Central Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Eastern Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Mahandi Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Bharat Cooking Coal Limited
              </p>
            </div>
          </div>

          {/* line2 ends here  */}
        </div>
        <div
          id="line3"
          ref={l3Ref}
          class="medium my-5 -translate-x-[115px] flex gap-5 justify-center items-centerj lg:hidden"
        >
          {/* line3 start here  */}

          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                South Eastern Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Central Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Eastern Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Mahandi Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Bharat Cooking Coal Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                South Eastern Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Central Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Eastern Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Mahandi Coalfields Limited
              </p>
            </div>
          </div>
          <div
            class="small flex flex-row justify-center items-center rounded-full lg:h-24 w-60 border 
   border-gray-500 lg:flex md:flex  h-[85px]"
            style={{ boxShadow: "2px 2px 5px 5px gray" }}
          >
            <div class="w-2/4 h-full flex flex-wrap justify-center items-center relative rounded-full">
              <img
                src="/images/base.png"
                class="object-contain absolute left-[-8px]"
                alt=""
              />
            </div>
            <div class=" ">
              <p class="w-32 h-7  relative left-[-14px] rounded-full flex justify-center items-center font-bold text-[14px]">
                Bharat Cooking Coal Limited
              </p>
            </div>
          </div>

          {/* line3 ends here */}
        </div>
      </div>
    </div>
  );
};

export default Section2;
