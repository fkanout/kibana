/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { z } from '@kbn/zod';

const deleteInvestigationItemParamsSchema = z.object({
  path: z.object({
    investigationId: z.string(),
    itemId: z.string(),
  }),
});

type DeleteInvestigationItemParams = z.infer<typeof deleteInvestigationItemParamsSchema.shape.path>;

export { deleteInvestigationItemParamsSchema };
export type { DeleteInvestigationItemParams };
