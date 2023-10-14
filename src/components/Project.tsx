import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import PinkTitle from './PinkTitle'

interface Props {
  name: string,
  description: any,
  image: string,
  code?: string,
  website?: string
}

const Project = ({ name, description, image, code, website }: Props) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div>
        <div onClick={openModal} className='hover:cursor-pointer'>
          <img src={image} width='350px' height='200px' alt={name} className='border-shadow hover:border-pink' />
        </div>
      </div>

      <Transition appear show={isOpen}>
        <Dialog className='relative z-50 w-screen h-screen' onClose={closeModal}>
          <div className='fixed -top-[11px] sm:-top-[16px] -left-[11px] sm:-left-[16px] overflow-y-auto'>
            <div className='flex items-center justify-center p-4 text-center'>
              <Transition.Child
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-screen h-screen transform overflow-hidden bg-blue text-pink p-6 text-left align-middle transition-all'>
                  <div onClick={closeModal} className='absolute top-4 left-4 sm:top-8 sm:left-8 hover:cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-9 h-9 fill-pink hover:fill-off-white hover:animate-pulse'>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className='flex flex-col gap-4 md:gap-6 w-full mt-12 sm:mt-20 max-w-[600px] mx-auto'>
                    <h1 className='font-display text-5xl mb-2 text-pink-light'>
                      {name}
                    </h1>
                    <p>
                      {description}
                    </p>
                    <p className='flex flex-row gap-2 mt-3'>
                      {code && <a href={code} target='_blank' className='project-link'>Code</a>}
                      {website && <a href={website} target='_blank' className='project-link'>Live Website</a>}
                    </p>
                    <div className='mt-4'>
                      <div>
                        <div className='relative mx-auto border-pink-light bg-pink border-[8px] rounded-t-xl h-[172px] max-w-[301px] sm:h-[294px] sm:max-w-[512px]'>
                          <div className='rounded-t-[4px] overflow-hidden h-[156px] sm:h-[278px] bg-off-white'>
                            <img src={image} className='block h-[156px] sm:h-[278px] w-full' alt={name} />
                          </div>
                        </div>
                      </div>
                      <div className='relative mx-auto bg-pink rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] sm:h-[21px] sm:max-w-[597px]'>
                        <div className='absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] sm:w-[96px] sm:h-[8px] bg-pink-light'></div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
    
  )
}

export default Project