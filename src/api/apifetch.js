const BASE_URL = "https://fakestoreapi.com";

export async function ApiFetch(path) {
  const response = await fetch(`${BASE_URL}${path}`);
  const data = await response.json();
  return data;
}
