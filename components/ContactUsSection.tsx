import Image from "next/image";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";

export function ContactUsSection() {
  return (
    <section>
      <div className="relative overflow-hidden md:rounded-[15px] bg-designo-peach md:h-[711px] h-[764px] xl:h-120 md:justify-center grid">
        <Image
          src="/shapes/shape-contact-us.png"
          alt=""
          aria-hidden="true"
          width={297}
          height={316}
          className="pointer-events-none absolute top-0 left-0 h-auto w-160 max-w-none"
        />

        <div className="relative xl:mx-auto flex flex-col gap-8 xl:grid px-6 xl:gap-23.75 sm:px-10 xl:h-full justify-center xl:grid-cols-[445px_381px] xl:items-center">
          <div className="flex max-w-111.25 md:max-xl:max-w-none md:w-[573px] md:text-left flex-col gap-8 text-center xl:min-h-46 xl:justify-center xl:text-left">
            <div className="space-y-6">
              <h1 className="preset-mobile-heading md:preset-1 text-designo-white">
                Contact Us
              </h1>
              <p className="preset-mobile-body md:preset-body text-designo-white md:tracking-normal">
                Ready to take it to the next level? Let&apos;s talk about your
                project or idea and find out how we can help your business grow.
                If you are looking for unique digital experiences that&apos;s
                relatable to your users, drop us a line.
              </p>
            </div>
          </div>

          <form
            action="#"
            method="post"
            className="flex min-w-0 flex-col min-h-92.75 justify-between"
          >
            <div>
              <label className="sr-only" htmlFor="contact-name">
                Name
              </label>
              <Input
                id="contact-name"
                name="name"
                placeholder="Name"
                autoComplete="name"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="contact-email">
                Email Address
              </label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Email Address"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="contact-phone">
                Phone
              </label>
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="Phone"
                autoComplete="tel"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="contact-message">
                Your Message
              </label>
              <Textarea
                id="contact-message"
                name="message"
                placeholder="Your Message"
                autoComplete="off"
              />
            </div>

            <div className="flex justify-center sm:justify-end">
              <Button type="submit" variant="secondary">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
