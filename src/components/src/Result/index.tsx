/* eslint-disable @typescript-eslint/no-extra-non-null-assertion */
import * as React from 'react';
import classNames from 'classnames';

import NoFound from './noFound';
import './style/index.scss';

type ResultProps = {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  status?: React.ReactNode;
  subTitle?: React.ReactNode;
  extra?: React.ReactNode;
  children?: React.ReactNode;
};

type ExceptionStatusType = '403' | '404' | '500';

type ExceptionMapType = Partial<Record<ExceptionStatusType, React.FC<any>>>;

const prefixCls = 'result';

const ExceptionMap: ExceptionMapType = {
  '404': NoFound,
};

const ExceptionStatus = Object.keys(ExceptionMap);

const renderIcon = (prefixCls: string, { status, icon }: ResultProps) => {
  const className = classNames(`${prefixCls}-icon`);
  if (ExceptionStatus.includes(`${status}`)) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const SVGComponent = ExceptionMap[status as ExceptionStatusType]!!;
    return (
      <div className={`${className} ${prefixCls}-image`}>
        <SVGComponent />
      </div>
    );
  }
  return <div className={className}>{icon}</div>;
};

const renderExtra = (prefixCls: string, { extra }: ResultProps) =>
  extra && <div className={`${prefixCls}-extra`}>{extra}</div>;

const Result = (props: ResultProps) => {
  const { title, status, subTitle, icon, extra, children } = props;
  const className = classNames(prefixCls);
  return (
    <div className={className}>
      {renderIcon(prefixCls, { status, icon })}
      <div className={`${prefixCls}-title`}>{title}</div>
      {subTitle && <div className={`${prefixCls}-subtitle`}>{subTitle}</div>}
      {renderExtra(prefixCls, { extra })}
      {children && <div className={`${prefixCls}-content`}>{children}</div>}
    </div>
  );
};

export default Result;
