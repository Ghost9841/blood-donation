import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import aboutus from "@/lib/aboutus.jpg";

export default function AboutUs() {
  return (


    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src={aboutus}
            alt="About Us"
            width={600}
            height={400}
            className="rounded-lg shadow-md h-[500px] w-[600px]"
            />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6 text-gray-600">
            At our Blood Donation Platform, we are committed to saving lives by connecting blood donors with those in
            need. Our mission is to create a seamless and efficient system that ensures timely access to life-saving
            blood donations.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-6 text-gray-600">
            We envision a world where no life is lost due to a lack of blood supply. Through technology and community
            engagement, we aim to build a global network of donors and recipients, making blood donation accessible to
            all.
          </p>
          <Button asChild>
            <Link href="/register" target="_blank">Join Us Today</Link>
          </Button>
        </div>
      </div>
    </div>

  )
}

