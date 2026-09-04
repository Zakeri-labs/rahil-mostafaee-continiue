import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const PAGE_FILE_PATTERN = /^page\.(?:tsx?|jsx?|mdx)$/;
const DYNAMIC_SEGMENT_PATTERN = /^\[.*\]$/;
const ROUTE_GROUP_PATTERN = /^\([^/]+\)$/;
const INTERCEPTION_SEGMENT_PATTERN = /^\(\.{1,3}\)/;

const EXCLUDED_ROUTE_SEGMENTS = new Set([
  "admin",
  "api",
  "auth",
  "authentication",
  "booking-confirmation",
  "callback",
  "callbacks",
  "coming-soon",
  "confirmation",
  "dashboard",
  "dev",
  "development",
  "draft",
  "drafts",
  "internal",
  "preview",
  "previews",
  "private",
  "success",
  "test",
  "tests",
  "thank-you",
  "thankyou",
]);

const NOINDEX_PATTERN = /\bnoindex\b|\bindex\s*:\s*false\b/i;
const REDIRECT_PATTERN = /\b(?:permanentRedirect|redirect)\s*\(/;
const COMING_SOON_PATTERN = /\bcoming[\s_-]*soon\b/i;

function normalizeRoutePath(routePath) {
  if (!routePath || routePath === "/") return "/";

  const normalized = `/${routePath}`
    .replaceAll(/\/+/g, "/")
    .replace(/\/+$/, "")
    .replace(/^\/?/, "/");

  return normalized || "/";
}

function isHiddenSegment(segment) {
  return segment.startsWith("_") || segment.startsWith("@") || segment.startsWith(".");
}

function isIndexableRoute(routeSegments, source) {
  const lowerSegments = routeSegments.map((segment) => segment.toLowerCase());

  if (lowerSegments.some((segment) => EXCLUDED_ROUTE_SEGMENTS.has(segment))) return false;
  if (lowerSegments.some((segment) => COMING_SOON_PATTERN.test(segment))) return false;
  if (NOINDEX_PATTERN.test(source)) return false;
  if (COMING_SOON_PATTERN.test(source)) return false;
  if (REDIRECT_PATTERN.test(source)) return false;

  return true;
}

function routePathFromSegments(segments) {
  const publicSegments = [];

  for (const segment of segments) {
    if (isHiddenSegment(segment)) return null;
    if (DYNAMIC_SEGMENT_PATTERN.test(segment)) return null;
    if (INTERCEPTION_SEGMENT_PATTERN.test(segment)) return null;
    if (ROUTE_GROUP_PATTERN.test(segment)) continue;
    publicSegments.push(segment);
  }

  return normalizeRoutePath(publicSegments.join("/"));
}

async function collectPageFiles(directory, relativeSegments = []) {
  const entries = await readdir(directory, { withFileTypes: true });
  const pages = [];

  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      pages.push(...(await collectPageFiles(absolutePath, [...relativeSegments, entry.name])));
      continue;
    }

    if (entry.isFile() && PAGE_FILE_PATTERN.test(entry.name)) {
      pages.push({ absolutePath, routeSegments: relativeSegments });
    }
  }

  return pages;
}

export async function getIndexableRoutes(appDirectory) {
  const pageFiles = await collectPageFiles(appDirectory);
  const routes = new Set();

  for (const page of pageFiles) {
    const routePath = routePathFromSegments(page.routeSegments);
    if (!routePath) continue;

    const source = await readFile(page.absolutePath, "utf8");
    if (!isIndexableRoute(page.routeSegments, source)) continue;

    routes.add(routePath);
  }

  return [...routes].sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));
}

export { normalizeRoutePath, routePathFromSegments };
