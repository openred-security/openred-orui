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

import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function getParentAnchor(element) {
  while (element.nodeName !== 'A' && element.parentElement != null) {
    element = element.parentElement;
  }
  return element;
}

export const LinkWrapper = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    const onClick = (e) => {
      // don't prevent open-in-new-tab actions
      if (e.metaKey === true || e.ctrlKey === true) return;

      // look for an anchor ancestor
      const anchor = getParentAnchor(e.target);
      if (anchor && anchor.nodeName === 'A') {
        const href = anchor.getAttribute('href');
        // check if this is an internal link
        if (href.startsWith('#/')) {
          history.push(href.replace('#', ''));
          e.preventDefault();
        }
      }
    };

    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [history]);

  return children;
};
