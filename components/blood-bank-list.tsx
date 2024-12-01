'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RefreshCw, Phone, MapPin } from 'lucide-react'

interface BloodBank {
  name: string
  location: string
  contact: string
}

const bloodBanks: BloodBank[] = [
  {
    name: "NAME OF THE BLOOD BANK",
    location: "ABC Hospital Building, XYZ Road, Place, District, Pincode",
    contact: "XXXXXXXXXX"
  },
  {
    name: "NAME OF THE BLOOD BANK",
    location: "ABC Hospital Building, XYZ Road, Place, District, Pincode",
    contact: "XXXXXXXXXX"
  },
  {
    name: "NAME OF THE BLOOD BANK",
    location: "ABC Hospital Building, XYZ Road, Place, District, Pincode",
    contact: "XXXXXXXXXX"
  },
  {
    name: "NAME OF THE BLOOD BANK",
    location: "ABC Hospital Building, XYZ Road, Place, District, Pincode",
    contact: "XXXXXXXXXX"
  },
  // Add more blood banks as needed
]

export function BloodBankList() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <div className="flex justify-end mb-6">
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={() => window.location.reload()}
        >
          <RefreshCw className="h-4 w-4" /> Refresh
        </Button>
      </div>
      
      {bloodBanks.map((bank, index) => (
        <Card key={index} className="p-6">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">{bank.name}</h3>
              <p className="text-sm text-gray-600">{bank.location}</p>
              <p className="text-sm">Contact Number: {bank.contact}</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => window.open(`tel:${bank.contact}`, '_blank')}
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
      ))}
    </div>
  )
}

