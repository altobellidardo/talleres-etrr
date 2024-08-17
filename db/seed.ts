import { db, workshops, roles, users } from 'astro:db';

const initialWorkshops = [
	{
		name: 'Workshop 1',
		description: 'Workshop 1 description',
		image_url: 'https://via.placeholder.com/150',
		capacity: 10,
		teachers: 'Teacher 1, Teacher 2'
	}
]

const initalRoles = [
	{ name: 'admin' },
	{ name: 'user' }
]

const initialUsers = [
	{
		name: 'Dardo Altobelli',
		email: 'daltobelli@etrr.edu.ar',
		role: 'admin'
	}
]


// https://astro.build/db/seed
export default async function seed() {
	await db.insert(workshops).values(initialWorkshops)
	await db.insert(roles).values(initalRoles)
	await db.insert(users).values(initialUsers)
	console.log('Database seeded!')
}
