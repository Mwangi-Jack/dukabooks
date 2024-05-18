'use client'

import Image from "next/image";
import Link from "next/link";

const links = [
  {
    id: 1,
    name: 'Home',
    path: '/'
  },
  {
    id: 2,
    name: 'Contact',
    path: '/contacts'
  },
  {
    id: 3,
    name: 'About',
    path: '/about'
  },
  {
    id: 4,
    name: 'Get Started',
    path: '/auth/signup'
  }
]
const linkes = ['Home', 'About', 'Contacts', 'Get Started']
export default function Header() {
  return (
    <div className="bg-[#004940d3] w-[100%] flex justify-between p-2 text-white shadow-lg shadow-[#00000069] fixed top-0 ">
      <div>logo</div>
      <div>
        <ul className="flex w-[500px] justify-between mr-10">
          {/* {
            linkes.map((link) =>
              // <li className="cursor-pointer" onClick={()=>alert('hello world!')}>{link}</li>,
              <Link href={`/${link}`}>{link}</Link>
            )
          } */}
          {
            links.map((link)=>{
              return <Link href={`${link.path}`} key={link.id}>{link.name}</Link>
            })
          }
        </ul>
      </div>
    </div>
  );
}
