import type { NextFetchEvent } from "next/server";
import type { NextRequest } from "next/server";

export type Middleware = (
  request: NextRequest,
  event: NextFetchEvent
) => Promise<Response | undefined> | Response | undefined;

export default function middleware(req, ev) {
  return new Response("Hello, world!");
}
