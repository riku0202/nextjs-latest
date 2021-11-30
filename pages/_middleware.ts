import type { NextFetchEvent, NextRequest } from "next/server";

export type Middleware = (
  request: NextRequest,
  event: NextFetchEvent
) => Promise<Response | undefined> | Response | undefined;

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  return new Response("Hello, world!");
}
