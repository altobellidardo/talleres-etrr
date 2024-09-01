import { db, eq, users } from "astro:db"

export function getUser (email) {
  console.log(email)
  return db
    .select()
    .from(users)
    .where(eq(users.email, email))
}
