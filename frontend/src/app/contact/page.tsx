"use client";

import { Card, CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center text-[var(--primary-color)] flex items-center justify-center mb-6">
        <Mail className="mr-2 text-[var(--accent-color)]" /> Contact Us
      </h1>

      <Card className="max-w-3xl mx-auto p-6  shadow-lg">
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center text-[var(--primary-color)]">
              <MapPin className="mr-2 text-[var(--primary-color)]" />

              <span>123, Sankalchand Patel University, Visnagar, Gujarat</span>
            </div>

            <div className="flex items-center text-[var(--primary-color)]">
              <Phone className="mr-2 text-[var(--primary-color)]" />

              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center text-[var(--primary-color)]">
              <Mail className="mr-2 text-[var(--primary-color)]" />

              <span>contact@spu.edu.in</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="max-w-3xl mx-auto mt-6 p-6 shadow-lg ">
        <CardContent>
          <h2 className="text-xl font-semibold text-[var(--primary-color)] mb-4">
            Send us a message
          </h2>

          <form className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              className="border border-[var(--primary-color)]"
            />

            <Input
              type="email"
              placeholder="Your Email"
              className="border border-[var(--primary-color)]"
            />

            <Textarea
              placeholder="Your Message"
              className="border border-[var(--primary-color)]"
            />

            <Button className="bg-[var(--primary-color)] text-[var(--secondary-color)] hover:bg-[var(--accent-color)] flex items-center cursor-pointer">
              <Send className="mr-2" /> Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
