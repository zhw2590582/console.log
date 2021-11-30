export function searchParam(name) {
  const search = window.location.search.slice(1);
  const searchParams = new URLSearchParams(search);
  return searchParams.get(name);
}
