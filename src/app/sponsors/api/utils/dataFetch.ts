export async function getSponsors() {
  const response = await fetch("/sponsors/api");

  return await response.json();
}
