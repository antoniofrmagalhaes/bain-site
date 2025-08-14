import { z } from 'zod';

export const buyVipSchema = z.object({
  id: z.string().min(1, 'ID obrigatório'),
  email: z.string().min(1, 'E-mail obrigatório').email('E-mail inválido'),
});

export type BuyVipFormValues = z.infer<typeof buyVipSchema>;
