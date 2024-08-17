import { db, workshops } from 'astro:db'

async function main () {
    const newWorkshop = {
        name: 'Workshop test',
        description: 'Workshop 1 description',
        image_url: 'https://via.placeholder.com/150',
        capacity: 10,
        teachers: 'Teacher 1, Teacher 2'
    }

    await db.insert(workshops).values(newWorkshop)
}

export default main