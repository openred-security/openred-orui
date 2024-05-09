/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import * as React from 'react';
const OuiIconVector = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.5 11V5H11V3.5H5V5H3.5v6H5v1.5h6V11h1.5Zm1 0H15v4h-4v-1.5H5V15H1v-4h1.5V5H1V1h4v1.5h6V1h4v4h-1.5v6ZM4 4V2H2v2h2Zm8 0h2V2h-2v2ZM2 14h2v-2H2v2Zm10 0h2v-2h-2v2Z" />
  </svg>
);
export const icon = OuiIconVector;
