import type { FeatureFlag } from '@hey/data/feature-flags';

import { IS_PREVIEW } from '@hey/data/constants';
import { hydrateFeatureFlags } from 'src/store/persisted/useFeatureFlagsStore';

import getCurrentSession from './getCurrentSession';

/**
 * Checks if a feature is enabled for the current user
 * @param key The feature flag key
 * @returns Whether the feature is enabled
 */
const isFeatureAvailable = (key: FeatureFlag | string) => {
  if (IS_PREVIEW) {
    return true;
  }

  const { id: sessionProfileId } = getCurrentSession();
  const { featureFlags } = hydrateFeatureFlags();

  if (!sessionProfileId) {
    return false;
  }

  return featureFlags.includes(key);
};

export default isFeatureAvailable;
