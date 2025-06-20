"use client";
import { withPaymentInterceptor } from "x402-axios";
import axios from "axios";
import { viemClient } from "@/ViemClient";
import { useSession } from "next-auth/react";

export default function PinataPage() {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Pinata Upload with Payment (Axios)
      </h1>
    </main>
  );
}
