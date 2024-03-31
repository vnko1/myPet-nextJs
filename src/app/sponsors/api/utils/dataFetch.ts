export async function getSponsors() {
  const response = await fetch("/sponsors/api", { next: { revalidate: 1 } });

  return await response.json();
}
