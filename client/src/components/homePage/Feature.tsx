import React from "react";

interface Props {}

const FeaturePart: React.FC<Props> = () => {
  return (
    <>
      {/* FEATURE HEADING */}
      <div className=" mb-4 text-5xl font-bold">
        <span>Features</span>
      </div>

      {/* ALL FEATURE LIST */}
      {/* 1 */}
      <div className="inline-flex h-[164px] items-start justify-center gap-4">
        <div className="inline-flex h-[164px] flex-col items-start justify-start">
          <div className="relative h-[165px] w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="165"
              viewBox="0 0 16 165"
              fill="none"
            >
              <rect
                width="2"
                height="133"
                transform="matrix(-1 0 0 1 9 32)"
                fill="#FDCDA1"
              />
              <path
                d="M16 24C16 28.4183 12.4183 32 8 32C3.58172 32 0 28.4183 0 24C0 19.5817 3.58172 16 8 16C12.4183 16 16 19.5817 16 24Z"
                fill="#D9D9D9"
              />
              <rect
                width="2"
                height="16"
                transform="matrix(-1 0 0 1 9 0)"
                fill="#FDCDA1"
              />
            </svg>
          </div>
        </div>

        {/* FEATURE-CONTENT */}
        <div className="inline-flex h-[164px] flex-col items-start justify-start gap-2.5">
          <div className="inline-flex items-start justify-start gap-2.5 self-stretch">
            <div className="font-['Frank Ruhl Libre'] text-[32px] font-semibold ">
              Cloud Coding
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-2.5 self-stretch">
            <div className=" max-w-4xl font-['Nunito'] text-sm  font-normal">
              Lorem ipsum dolor sit amet consectetur. Nibh consequat sem
              accumsan diam pellentesque neque. Sapien est ultrices vel leo in
              ac etiam lacus nunc. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Sapiente, quidem.
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="inline-flex h-[164px] items-start justify-center gap-4">
        <div className="inline-flex h-[164px] flex-col items-start justify-start">
          <div className="relative h-[165px] w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="165"
              viewBox="0 0 16 165"
              fill="none"
            >
              <rect
                width="2"
                height="133"
                transform="matrix(-1 0 0 1 9 32)"
                fill="#FDCDA1"
              />
              <path
                d="M16 24C16 28.4183 12.4183 32 8 32C3.58172 32 0 28.4183 0 24C0 19.5817 3.58172 16 8 16C12.4183 16 16 19.5817 16 24Z"
                fill="#D9D9D9"
              />
              <rect
                width="2"
                height="16"
                transform="matrix(-1 0 0 1 9 0)"
                fill="#FDCDA1"
              />
            </svg>
          </div>
        </div>

        {/* FEATURE-CONTENT */}
        <div className="inline-flex h-[164px] flex-col items-start justify-start gap-2.5">
          <div className=" items-start justify-start gap-2.5 self-stretch">
            <div className="font-['Frank Ruhl Libre'] text-[32px] font-semibold ">
              <span>Instant Code Execution</span>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-2.5 self-stretch">
            <div className=" max-w-4xl font-['Nunito'] text-sm  font-normal">
              Lorem ipsum dolor sit amet consectetur. Nibh consequat sem
              accumsan diam pellentesque neque. Sapien est ultrices vel leo in
              ac etiam lacus nunc.
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="inline-flex h-[164px] items-start justify-center gap-4">
        <div className="inline-flex h-[164px] flex-col items-start justify-start">
          <div className="relative h-[165px] w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="165"
              viewBox="0 0 16 165"
              fill="none"
            >
              <rect
                width="2"
                height="133"
                transform="matrix(-1 0 0 1 9 32)"
                fill="#FDCDA1"
              />
              <path
                d="M16 24C16 28.4183 12.4183 32 8 32C3.58172 32 0 28.4183 0 24C0 19.5817 3.58172 16 8 16C12.4183 16 16 19.5817 16 24Z"
                fill="#D9D9D9"
              />
              <rect
                width="2"
                height="16"
                transform="matrix(-1 0 0 1 9 0)"
                fill="#FDCDA1"
              />
            </svg>
          </div>
        </div>

        {/* FEATURE-CONTENT */}
        <div className="inline-flex h-[164px] flex-col items-start justify-start gap-2.5">
          <div className=" items-start justify-start gap-2.5 self-stretch">
            <div className="font-['Frank Ruhl Libre'] text-[32px] font-semibold ">
              <span>Collaborative Coding</span>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-2.5 self-stretch">
            <div className=" max-w-4xl font-['Nunito'] text-sm  font-normal">
              Lorem ipsum dolor sit amet consectetur. Nibh consequat sem
              accumsan diam pellentesque neque. Sapien est ultrices vel leo in
              ac etiam lacus nunc.
            </div>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="inline-flex h-[164px] items-start justify-center gap-4">
        <div className="inline-flex h-[164px] flex-col items-start justify-start">
          <div className="relative h-[165px] w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="165"
              viewBox="0 0 16 165"
              fill="none"
            >
              <rect
                width="2"
                height="133"
                transform="matrix(-1 0 0 1 9 32)"
                fill="#FDCDA1"
              />
              <path
                d="M16 24C16 28.4183 12.4183 32 8 32C3.58172 32 0 28.4183 0 24C0 19.5817 3.58172 16 8 16C12.4183 16 16 19.5817 16 24Z"
                fill="#D9D9D9"
              />
              <rect
                width="2"
                height="16"
                transform="matrix(-1 0 0 1 9 0)"
                fill="#FDCDA1"
              />
            </svg>
          </div>
        </div>

        {/* FEATURE-CONTENT */}
        <div className="inline-flex h-[164px] flex-col items-start justify-start gap-2.5">
          <div className=" items-start justify-start gap-2.5 self-stretch">
            <div className="font-['Frank Ruhl Libre'] text-[32px] font-semibold ">
              <span>Secure and Reliable</span>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-2.5 self-stretch">
            <div className=" max-w-4xl font-['Nunito'] text-sm  font-normal">
              Lorem ipsum dolor sit amet consectetur. Nibh consequat sem
              accumsan diam pellentesque neque. Sapien est ultrices vel leo in
              ac etiam lacus nunc.
            </div>
          </div>
        </div>
      </div>

      {/* 5 */}
      <div className="inline-flex h-[164px] items-start justify-center gap-4">
        <div className="inline-flex h-[164px] flex-col items-start justify-start">
          <div className="relative h-[165px] w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="165"
              viewBox="0 0 16 165"
              fill="none"
            >
              <rect
                width="2"
                height="133"
                transform="matrix(-1 0 0 1 9 32)"
                fill="#FDCDA1"
              />
              <path
                d="M16 24C16 28.4183 12.4183 32 8 32C3.58172 32 0 28.4183 0 24C0 19.5817 3.58172 16 8 16C12.4183 16 16 19.5817 16 24Z"
                fill="#D9D9D9"
              />
              <rect
                width="2"
                height="16"
                transform="matrix(-1 0 0 1 9 0)"
                fill="#FDCDA1"
              />
            </svg>
          </div>
        </div>

        {/* FEATURE-CONTENT */}
        <div className="inline-flex h-[164px] flex-col items-start justify-start gap-2.5">
          <div className=" items-start justify-start gap-2.5 self-stretch">
            <div className="font-['Frank Ruhl Libre'] text-[32px] font-semibold ">
              <span>Adaptable Environment</span>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-2.5 self-stretch">
            <div className=" max-w-4xl font-['Nunito'] text-sm  font-normal">
              Lorem ipsum dolor sit amet consectetur. Nibh consequat sem
              accumsan diam pellentesque neque. Sapien est ultrices vel leo in
              ac etiam lacus nunc.
            </div>
          </div>
        </div>
      </div>

      {/* 6 */}
      <div className="inline-flex h-[164px] items-start justify-center gap-4">
        <div className="inline-flex h-[164px] flex-col items-start justify-start">
          <div className="relative h-[165px] w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="165"
              viewBox="0 0 16 165"
              fill="none"
            >
              <rect
                width="2"
                height="133"
                transform="matrix(-1 0 0 1 9 32)"
                fill="#FDCDA1"
              />
              <path
                d="M16 24C16 28.4183 12.4183 32 8 32C3.58172 32 0 28.4183 0 24C0 19.5817 3.58172 16 8 16C12.4183 16 16 19.5817 16 24Z"
                fill="#D9D9D9"
              />
              <rect
                width="2"
                height="16"
                transform="matrix(-1 0 0 1 9 0)"
                fill="#FDCDA1"
              />
            </svg>
          </div>
        </div>

        {/* FEATURE-CONTENT */}
        <div className="inline-flex h-[164px] flex-col items-start justify-start gap-2.5">
          <div className=" items-start justify-start gap-2.5 self-stretch">
            <div className="font-['Frank Ruhl Libre'] text-[32px] font-semibold ">
              <span>Code History</span>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-2.5 self-stretch">
            <div className=" max-w-4xl font-['Nunito'] text-sm  font-normal">
              Lorem ipsum dolor sit amet consectetur. Nibh consequat sem
              accumsan diam pellentesque neque. Sapien est ultrices vel leo in
              ac etiam lacus nunc.
            </div>
          </div>
        </div>
      </div>

      {/* 7 */}
      <div className="inline-flex h-[164px] items-start justify-center gap-4">
        <div className="inline-flex h-[164px] flex-col items-start justify-start">
          <div className="relative h-[165px] w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="165"
              viewBox="0 0 16 165"
              fill="none"
            >
              <rect
                width="2"
                height="133"
                transform="matrix(-1 0 0 1 9 32)"
                fill="#FDCDA1"
              />
              <path
                d="M16 24C16 28.4183 12.4183 32 8 32C3.58172 32 0 28.4183 0 24C0 19.5817 3.58172 16 8 16C12.4183 16 16 19.5817 16 24Z"
                fill="#D9D9D9"
              />
              <rect
                width="2"
                height="16"
                transform="matrix(-1 0 0 1 9 0)"
                fill="#FDCDA1"
              />
            </svg>
          </div>
        </div>

        {/* FEATURE-CONTENT */}
        <div className="inline-flex h-[164px] flex-col items-start justify-start gap-2.5">
          <div className=" items-start justify-start gap-2.5 self-stretch">
            <div className="font-['Frank Ruhl Libre'] text-[32px] font-semibold ">
              <span>White Board</span>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-2.5 self-stretch">
            <div className=" max-w-4xl font-['Nunito'] text-sm  font-normal">
              Lorem ipsum dolor sit amet consectetur. Nibh consequat sem
              accumsan diam pellentesque neque. Sapien est ultrices vel leo in
              ac etiam lacus nunc.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturePart;
