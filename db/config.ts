import { defineDb, defineTable, column, sql } from 'astro:db';

const workshops = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
      unique: true,
      default: sql`gen_random_uuid()`,
      optional: false
    }),
    name: column.text({
      unique: true
    }),
    description: column.text({
      optional: true
    }),
    image_url: column.text({
      optional: true
    }),
    capacity: column.number(),
    teachers: column.text()
  }
})

const roles = defineTable({
  columns: {
    name: column.text({
      unique: true,
      primaryKey: true
    })
  }
})

const users = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
      unique: true,
      default: sql`gen_random_uuid()`
    }),
    name: column.text(),
    email: column.text({
      unique: true
    }),
    role: column.text({
      references: () => roles.columns.name
    })
  }
})

const registrations = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
      unique: true,
      default: sql`gen_random_uuid()`
    }),
    workshop_id: column.text({
      references: () => workshops.columns.id
    }),
    user_id: column.text({
      references: () => users.columns.id
    })
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    workshops,
    roles,
    users,
    registrations
  }
});
