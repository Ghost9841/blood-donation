import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import herosection from "../lib/herosection.jpg";
export default function Home() {
  const collaborators = [
    { name: 'NCC', logo: '/placeholder.svg' },
    { name: 'NSS', logo: '/placeholder.svg' },
    { name: 'YMCA', logo: '/placeholder.svg' },
  ]

  return (
    <div className="min-h-screen">
      <section className=" flex relative min-h-[600px] overflow-hidden space-x-12 mr-1">
        
        
             <Image src={herosection} alt="herosection"
             className="h-[400px] w-full space-x-12 mx-10 mt-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"/>
       
          <div className="max-w-xl text-left mt-7">
            <h1 className="text-6xl font-bold mb-6 text-black max-w-2xl">
              Save Life Donate Blood
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <Button 
              asChild
              className="bg-black text-white hover:bg-gray-900 px-8 py-6 text-lg"
            >
              <Link href="/find-blood" className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Get Blood Now
              </Link>
            </Button>
          </div>
      </section>

      <section className=" container px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-600">
          We are dedicated to connecting blood donors with those in need, creating a seamless platform for life-saving donations.
        </p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How to get Blood?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {['Register', 'Search', 'Connect'].map((step, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="rounded-full w-12 h-12 bg-red-100 flex items-center justify-center mb-4">
                    <Heart className="text-red-600" />
                  </div>
                  <h3 className="font-bold mb-2">{step}</h3>
                  <p className="text-gray-600">
                   <Link href="/find-blood">
                    {step === 'Search' && 'Find available donors in your area'}
                   </Link> 
                   <Link href='/register'>
                   {step === 'Register' && 'Create your account as a recipient'}
                   </Link>
                  <Link href='/contact'>
                    {step === 'Connect' && 'Contact donors and arrange donation'}
                  </Link>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 container px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Collaborators</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {collaborators.map((collaborator, index) => (
            <div key={index} className="aspect-square relative bg-gray-100 rounded-lg p-8 flex items-center justify-center">
              <Image
                src={collaborator.logo}
                alt={collaborator.name}
                width={200}
                height={200}
                className="object-contain opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl font-bold text-gray-300">{collaborator.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-900" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </section>
    </div>
  )
}

