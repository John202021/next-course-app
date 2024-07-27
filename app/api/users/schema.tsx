import { z } from 'zod';

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email()
})

export type User = z.infer<typeof schema>;

export default schema;