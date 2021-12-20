/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { createApiRef } from '@backstage/core-plugin-api';
import { DashboardEntity } from '../types/DashboardEntity';
import { DashboardSnapshot } from '../types/DashboardSnapshot';
import { SnapshotDetails } from '../types/SnapshotDetails';

export interface DashboardEntitySummary {
  getDashboardEntity: DashboardEntity;
}

export interface DashboardSnapshotSummary {
  getDashboardSnapshot: DashboardSnapshot;
}

export interface SnapshotDetailsSummary {
  getSnapshotDetails: SnapshotDetails[];
}
export const newRelicDashboardApiRef = createApiRef<NewRelicDashboardApi>({
  id: 'plugin.newrelicdashboard.service',
  description: 'Used by the New Relic Dashboard plugin to make requests',
});

export type NewRelicDashboardApi = {
  getDashboardEntity(guid: String): Promise<DashboardEntitySummary | undefined>;
  getDashboardSnapshot(
    guid: String,
    duration: Number,
  ): Promise<DashboardSnapshotSummary | undefined>;
};
