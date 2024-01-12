/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import { i18n } from '@kbn/i18n';
import React, { useState } from 'react';
import { EuiCallOut, EuiLink, EuiButton } from '@elastic/eui';
import { RuleTypeParams } from '@kbn/alerting-plugin/common';
import { getCustomThresholdParamsFromMetricRule } from '../../../utils/map_metric_to_custom_threshold_rule';
import { AlertParams } from '../types';
import { AlertFlyout } from './alert_flyout';

interface DeprecationCalloutProps {
  ruleParams: RuleTypeParams & AlertParams;
  closeFlyout?: (metadata: Record<string, any>) => void;
}

export const DeprecationCallout = ({ ruleParams, closeFlyout }: DeprecationCalloutProps) => {
  const [openFlyout, setOpenFlyout] = useState(false);

  const handleCreateCustomThresholdRule = () => {
    if (closeFlyout) {
      const customThresholdParams = getCustomThresholdParamsFromMetricRule(ruleParams);
      closeFlyout({
        toCustomThresholdRule: {
          ...customThresholdParams,
        },
      });
    }
    setOpenFlyout(true);
  };

  return (
    <>
      <AlertFlyout visible={openFlyout} setVisible={setOpenFlyout} />
      <EuiCallOut
        title={i18n.translate('xpack.infra.metricThresholdRule.deprecationCallout.title', {
          defaultMessage: 'Metric threshold rule is deprecated!',
        })}
        color="warning"
        iconType="warning"
      >
        <p>
          {i18n.translate('xpack.infra.metricThresholdRule.deprecationCallout.message', {
            defaultMessage:
              'The new Custom threshold rule is here! You can create one based on the conditions and params you set here. For more information, ',
          })}
          <EuiLink data-test-subj="infraDeprecationCalloutHeresALinkLink" href="#">
            {i18n.translate('xpack.infra.deprecationCallout.heresALinkLinkLabel', {
              defaultMessage: 'see the doc.',
            })}
          </EuiLink>
        </p>
        <EuiButton
          data-test-subj="infraLinkButtonButton"
          color="warning"
          onClick={handleCreateCustomThresholdRule}
        >
          {i18n.translate('xpack.infra..linkButtonButtonLabel', {
            defaultMessage: 'Create Custom threshold rule',
          })}
        </EuiButton>
      </EuiCallOut>
    </>
  );
};
