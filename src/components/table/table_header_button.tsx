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

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import classNames from 'classnames';
import { CommonProps } from '../common';
import { OuiInnerText } from '../inner_text';

import { IconType, OuiIcon } from '../icon';

export type OuiTableHeaderButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    iconType?: IconType;
  };

export const OuiTableHeaderButton: FunctionComponent<OuiTableHeaderButtonProps> = ({
  children,
  className,
  iconType,
  ...rest
}) => {
  const classes = classNames('ouiTableHeaderButton', className);

  // Add an icon to the button if one exists.
  let buttonIcon;

  if (iconType) {
    buttonIcon = (
      <OuiIcon
        className="ouiTableHeaderButton__icon"
        type={iconType}
        size="m"
        aria-hidden="true"
      />
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      <OuiInnerText>
        {(ref, innerText) => (
          <span title={innerText} ref={ref}>
            {children}
          </span>
        )}
      </OuiInnerText>

      {buttonIcon}
    </button>
  );
};