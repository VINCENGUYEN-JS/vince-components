import * as React from 'react';
import classNames from 'classnames';

import ResponsiveObserve, {
  ScreenMap,
  Breakpoint,
} from '../../../../utils/responsiveObserve';
import './style/index.scss';

interface RowContextState {
  gutter: number;
}

export const RowContext = React.createContext<RowContextState>(
  {} as RowContextState
);

const prefixCls = 'row';

type RowProps = {
  children: React.ReactNode;
  gutter?: number | Partial<Record<Breakpoint, number>>;
};

const Row = (props: RowProps) => {
  const { children, gutter = 0 } = props;

  const [screens, setScreens] = React.useState<ScreenMap>({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true,
  });

  React.useEffect(() => {
    const token = ResponsiveObserve.subscribe((screen) => {
      setScreens(screen);
    });
    return () => ResponsiveObserve.unsubscribe(token);
  }, []);

  const getGutter = React.useCallback((): number => {
    let result = 0;
    if (typeof gutter === 'number') {
      return gutter;
    }

    if (typeof gutter === 'object') {
      Object.keys(screens).forEach((breakpoint: Breakpoint) => {
        if (gutter[breakpoint] !== undefined && screens[breakpoint]) {
          result = gutter[breakpoint] as number;
        }
      });
    }

    return result;
  }, [screens, gutter]);

  const classes = classNames(prefixCls, {});

  const rowContext = React.useMemo(
    () => ({
      gutter: getGutter(),
    }),
    [getGutter]
  );
  return (
    <RowContext.Provider value={rowContext}>
      <div className={classes}>{children}</div>
    </RowContext.Provider>
  );
};

export default Row;
