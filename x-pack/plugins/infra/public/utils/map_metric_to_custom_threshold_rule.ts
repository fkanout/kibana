/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { RuleTypeParams } from '@kbn/alerting-plugin/common';
import { CustomThresholdExpressionMetric } from '@kbn/observability-plugin/common/custom_threshold_rule/types';

import { AlertParams } from '../alerting/metric_threshold/types';

export const numberToLetter = (number: number): string => {
  // Assuming 'A' corresponds to 1, 'B' corresponds to 2, and so on
  const baseCharCode = 'A'.charCodeAt(0) - 1;
  if (number < 1) {
    throw new Error('Number should be 1 or greater');
  }
  const letter = String.fromCharCode(baseCharCode + number);
  return letter;
};

export const handleMetricDataView = () => {};

export const getCustomThresholdParamsFromMetricRule = (
  ruleParams: RuleTypeParams & AlertParams
): Record<string, unknown> => {
  const { criteria, filterQueryText, sourceId, groupBy, alertOnNoData, alertOnGroupDisappear } =
    ruleParams;
  return {
    filterQuery: filterQueryText,
    sourceId,
    alertOnNoData,
    alertOnGroupDisappear,
    groupBy,
    criteria: [
      {
        metrics: criteria.map((metric, index) => {
          if (metric.aggType === 'custom') {
            return {
              name: numberToLetter(index + 1),
              field: metric.customMetrics?.[0].field,
              aggType: metric.customMetrics?.[0].aggType,
            };
          }
          return {
            name: numberToLetter(index + 1),
            field: metric.metric,
            aggType: metric.aggType,
          };
        }) as CustomThresholdExpressionMetric[],
        // We pick up the threshold from the first criteria (one rule condition per criteria in the Metric rule).
        threshold: criteria.length === 1 ? criteria[0].threshold : undefined,
        // timeSize and timeUnit are repeated with the same value in each criteria, pick the first one.
        timeSize: criteria.length > 0 ? criteria[0].timeSize : 1,
        timeUnit: criteria.length > 0 ? criteria[0].timeUnit : 'm',
        equation: criteria[0].equation,
      },
    ],
  };
};
