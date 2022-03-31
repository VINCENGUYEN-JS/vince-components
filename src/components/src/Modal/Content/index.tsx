import * as React from 'react';

import type { ModalPropTypes } from '../ModalPropTypes';

type ContentPropTypes = ModalPropTypes;

const Content = React.forwardRef<HTMLDivElement, ContentPropTypes>(
  (props: ContentPropTypes, ref) => {
    const { onClose, title, children, prefixCls, closable, width, footer } =
      props;
    let headerNode: React.ReactNode;
    if (title) {
      headerNode = (
        <div className={`${prefixCls}-header`}>
          <div className={`${prefixCls}-title`}>{title}</div>
        </div>
      );
    }
    let closer: React.ReactNode;
    if (closable) {
      closer = (
        <button
          type="button"
          onClick={() => onClose && onClose()}
          aria-label="Close"
          className={`${prefixCls}-close`}
        >
          {<span className={`${prefixCls}-close-x`} />}
        </button>
      );
    }

    let footerNode: React.ReactNode;
    if (footer) {
      footerNode = <div className={`${prefixCls}-footer`}>{footer}</div>;
    }

    const content = (
      <div className={`${prefixCls}-content`} ref={ref}>
        {closer}
        {headerNode}
        <div className={`${prefixCls}-body`}>{children}</div>
        {footerNode}
      </div>
    );
    return (
      <div
        key="modal"
        role="document"
        className={prefixCls}
        style={{ width: width + 'px' }}
      >
        {content}
      </div>
    );
  }
);

Content.displayName = 'Content';

export default Content;
