export async function loginUser(email, password) {
  const response = await fetch("http://localhost:5173/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login gagal");
  }

  return data;
}