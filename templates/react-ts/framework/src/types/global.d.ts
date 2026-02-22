// src/global.d.ts

import type LoggerType from "@/libs/logger";

declare global {
   const Logger: typeof LoggerType;
   interface GlobalThis {
      Logger: typeof LoggerType;
   }
}

export {};
