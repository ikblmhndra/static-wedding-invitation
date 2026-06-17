import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="surface-card max-w-2xl px-8 py-12 text-center sm:px-12">
        <p className="section-kicker">RSVP Received</p>
        <h1 className="text-5xl text-truffle sm:text-6xl">Thank You</h1>
        <p className="mt-6 text-lg leading-8 text-[#71615b]">
          Your response has been received with gratitude. We are honored to celebrate this special day
          with the people we love most.
        </p>
        <Link href="/" className="button-primary mt-10">
          Return to Invitation
        </Link>
      </div>
    </main>
  );
}
