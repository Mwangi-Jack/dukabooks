'use client'

import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { useState } from 'react'

import CustomBtn from '../common/Button'
import Input from '../common/Input'
import FloatingLabelInput from '../common/FloatingLabelInput'
import SelectInput from '../common/SelectInput'

import { FaTimes } from "react-icons/fa";


export default function Modal() {
  let [isOpen, setIsOpen] = useState(false);
  const [ form, setForm ] = useState({
    productName : '',
    paymentMethod: '',
    amount_paid: null,
    amount_due: null
  })

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("Form::::",form)
  }

  return (
    <>
      <Button
        onClick={open}
        className="border bg-[#004940d3] rounded text-white py-1 hover:bg-[#004940] w-[100%]"
      >
        + Create New
      </Button>

      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-lg rounded-xl bg-[#d9d9d9cb] p-6 backdrop-blur-2xl">
                  <DialogTitle as="h3" className="text-base/7 font-medium text-black mb-5 flex justify-between">
                    <span>Add Transaction</span>
                    <span onClick={close} className='cursor-pointer'><FaTimes /></span>
                  </DialogTitle>
                  <form onSubmit={handleSubmit}>
                    <div className='space-y-6'>
                      <SelectInput  label={'Record Type'}/>
                      <div className='flex space-x-4'>
                        <Input name={'productName'} label={'Product Name'} handleChange={handleChange} />
                        <Input name={'amount_paid'} label={'Amount Paid'} handleChange={handleChange}/>
                      </div>
                      <div className=' flex space-x-4'>
                        <Input name={'amount_due'} label={'Amount Due'}  handleChange={handleChange}/>
                        <Input name={'paymentMethod'}  label={'Payment Method'} handleChange={handleChange}/>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button
                        type='submit'
                        className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                        onClick={close}
                      >
                        submit
                      </Button>
                    </div>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
