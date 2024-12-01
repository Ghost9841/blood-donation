'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RefreshCw, Phone, MapPin } from 'lucide-react'

export default function FindBlood() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="flex gap-2 mb-4">
            <Button variant="default" className="bg-black text-white hover:bg-gray-900">Blood Donors</Button>
            <Button variant="ghost">Blood Banks</Button>
          </div>
          <p className="text-sm text-gray-600">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={() => window.location.reload()}
        >
          <RefreshCw className="h-4 w-4" /> Refresh
        </Button>
      </div>
      
      <Card className="p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">NAME OF THE BLOOD BANK</h3>
            <p className="text-sm text-gray-600">ABC Hospital Building, XYZ Road, Place, District, Pincode</p>
            <p className="text-sm">Contact Number: XXXXXXXXXX</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => window.open('tel:XXXXXXXXXX', '_blank')}
            >
              <Phone className="h-4 w-4" /> Call
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => window.open('https://www.google.com/maps', '_blank')}
            >
              <MapPin className="h-4 w-4" /> View Location
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">NAME OF THE BLOOD BANK</h3>
            <p className="text-sm text-gray-600">ABC Hospital Building, XYZ Road, Place, District, Pincode</p>
            <p className="text-sm">Contact Number: XXXXXXXXXX</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => window.open('tel:XXXXXXXXXX', '_blank')}
            >
              <Phone className="h-4 w-4" /> Call
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => window.open('https://www.google.com/maps', '_blank')}
            >
              <MapPin className="h-4 w-4" /> View Location
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">NAME OF THE BLOOD BANK</h3>
            <p className="text-sm text-gray-600">ABC Hospital Building, XYZ Road, Place, District, Pincode</p>
            <p className="text-sm">Contact Number: XXXXXXXXXX</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => window.open('tel:XXXXXXXXXX', '_blank')}
            >
              <Phone className="h-4 w-4" /> Call
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => window.open('https://www.google.com/maps', '_blank')}
            >
              <MapPin className="h-4 w-4" /> View Location
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">NAME OF THE BLOOD BANK</h3>
            <p className="text-sm text-gray-600">ABC Hospital Building, XYZ Road, Place, District, Pincode</p>
            <p className="text-sm">Contact Number: XXXXXXXXXX</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => window.open('tel:XXXXXXXXXX', '_blank')}
            >
              <Phone className="h-4 w-4" /> Call
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => window.open('https://www.google.com/maps', '_blank')}
            >
              <MapPin className="h-4 w-4" /> View Location
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

