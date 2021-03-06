/*
 * Copyright 2020 ThoughtWorks, Inc.
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

import "css/global";

import AnalyticsEndpoint from "gocd-server-comms";
import StageChartFactories from "js/factories/stage-chart-factories.js";
import H from "js/lib/load-highcharts.js";

AnalyticsEndpoint.onInit(function (initialData, transport) {
  const data = JSON.parse(initialData),
     factory = StageChartFactories.get("StageBuildTime"),
      config = factory.config(data, transport),
   container = document.getElementById("chart-container");

  H.chart(container, config);
});

AnalyticsEndpoint.ensure("v1");
