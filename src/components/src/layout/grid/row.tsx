import * as React from 'react';
import classNames from 'classnames';

import ResponsiveObserve, {
  ScreenMap,
  Breakpoint,
  responsiveArray,
} from '../../../../utils/responsiveObserve';
import './style/index.scss';

interface RowContextState {
  gutter: [number, number];
}

export const RowContext = React.createContext<RowContextState>(
  {} as RowContextState
);

const prefixCls = 'row';

type Gutter = number | Partial<Record<Breakpoint, number>>;

type RowProps = {
  children: React.ReactNode;
  gutter?: Gutter | [Gutter, Gutter];
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
};

const Row = (props: RowProps) => {
  const { children, gutter = 0, justify } = props;

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

  const getGutter = React.useCallback((): [number, number] => {
    const results: [number, number] = [0, 0];
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, 0];
    normalizedGutter.forEach((g, index) => {
      if (typeof g === 'object') {
        for (let i = 0; i < responsiveArray.length; i++) {
          const breakpoint: Breakpoint = responsiveArray[i];
          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint] as number;
            break;
          }
        }
      } else {
        results[index] = g || 0;
      }
    });
    return results;
  }, [gutter, screens]);

  const classes = classNames(prefixCls, {
    [`${prefixCls}-${justify}`]: justify,
  });

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
