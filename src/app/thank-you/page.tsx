import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
      <Image
        src="/hero-bg.svg"
        alt=""
        aria-hidden
        width={768}
        height={1056}
        className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[min(94vw,48rem)] -translate-x-1/2 -translate-y-1/2 opacity-55 mix-blend-multiply"
      />
      <div className="editorial-shell relative max-w-2xl px-8 py-12 text-center sm:px-12 sm:py-14">
        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full border border-gold/15 bg-[linear-gradient(180deg,rgba(221,186,124,0.16),rgba(221,186,124,0.04))] text-gold">
          <Heart className="h-6 w-6" />
        </div>
        <p className="script-accent mt-6">With Gratitude</p>
        <p className="section-kicker mt-4">RSVP Received</p>
        <h1 className="mt-4 text-5xl leading-[0.9] text-truffle sm:text-6xl">Thank You</h1>
        <div className="editorial-divider mx-auto mt-6" />
        <p className="mt-6 text-lg leading-8 text-[#71615b]">
          Your response has been received with gratitude. We are honored to celebrate this special
          day with the people we love most.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#85736c]">
          We look forward to welcoming you into a day held in warmth, prayer, and quiet joy.
        </p>
        <Link href="/" className="button-primary mt-10 min-w-[220px]">
          Return to Invitation
        </Link>
      </div>
    </main>
  );
}
