"use client";

import { useEffect, useState } from "react";

import { getGuestNameFromSearch } from "@/lib/guest-name";

type GuestNameCardProps = {
  label: string;
  className?: string;
  labelClassName?: string;
  nameClassName?: string;
};

export function useGuestName() {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const syncGuestName = () => {
      setGuestName(getGuestNameFromSearch(window.location.search));
    };

    syncGuestName();
    window.addEventListener("popstate", syncGuestName);

    return () => {
      window.removeEventListener("popstate", syncGuestName);
    };
  }, []);

  return guestName;
}

export function GuestNameCard({
  label,
  className = "",
  labelClassName = "",
  nameClassName = ""
}: GuestNameCardProps) {
  const guestName = useGuestName();

  if (!guestName) {
    return null;
  }

  return (
    <div className={className}>
      <p className={labelClassName}>{label}</p>
      <p className={nameClassName}>{guestName}</p>
    </div>
  );
}
