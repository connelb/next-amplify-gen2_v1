"use client";

import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";

// here we go

Amplify.configure(config, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  return null;
}