export type Breakpoint = "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
export type BreakpointMap = Record<Breakpoint, string>;
export type ScreenMap = Partial<Record<Breakpoint, boolean>>;

type SubcribeFn = (screens: ScreenMap) => void;

const responsiveMap: BreakpointMap = {
  xs: "(max-width: 575px)",
  sm: "(min-width:576px)",
  md: "(min-width:768px)",
  lg: "(min-width:992px)",
  xl: "(min-width:1200px)",
  xxl: "(min-width:1600px)",
};

const subscribers = new Map<Number, SubcribeFn>();

let subUid = -1;
let screens = {};

const responsiveObserve = {
  matchHandlers: {} as {
    [prop: string]: {
      mql: MediaQueryList;
      listener: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null;
    };
  },

  dispatch(pointMap: ScreenMap) {
    screens = pointMap;
    subscribers.forEach((func) => func(screens));
    return subscribers.size >= 1;
  },

  register() {
    Object.keys(responsiveMap).forEach((screen: Breakpoint) => {
      const matchMediaQuery = responsiveMap[screen];
      const listener = ({ matches }: { matches: boolean }) => {
        this.dispatch({
          ...screens,
          [screen]: matches,
        });
      };
      const mql = window.matchMedia(matchMediaQuery);
      mql.onchange = listener;
      this.matchHandlers[matchMediaQuery] = {
        mql,
        listener,
      };

      listener(mql);
    });
  },

  subscribe(func: SubcribeFn): number {
    if (!subscribers.size) this.register();
    subUid += 1;
    subscribers.set(subUid, func);
    func(screens);
    return subUid;
  },

  unsubscribe(token: number) {
    subscribers.delete(token);
  },
};

export default responsiveObserve;
