/* //homy_builder (1)/homy/src/components/BuilderComponents.ts
import dynamic from "next/dynamic";
import { Builder } from "@builder.io/react";

// Register the component with Builder.io
Builder.registerComponent(
  dynamic(() => import("./homes/home-one/HeroBanner"), { ssr: false }),
  {
    name: "Homes",
    inputs: [
      {
        name: "homes",
        type: "string",
        required: true,
      }, 
    ],
    defaultStyles: {
      width: "100%",
      height: "100%",
    },
  }
); */