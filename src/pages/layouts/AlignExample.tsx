import * as React from 'react';

import { Align } from '@vince-components';

const align = {
  points: ['cc', 'cc'],
};

type Point = { point: { pageX: number; pageY: number } } | { point: null };

const AlignExample = () => {
  const [state, setState] = React.useState<Point>({
    point: null,
  });

  const onClick = ({
    pageX,
    pageY,
  }: React.MouseEvent<Element, MouseEvent>): void => {
    setState({ point: { pageX, pageY } });
  };

  console.log({ state });

  return (
    <div style={{ marginBottom: 170 }}>
      <div
        style={{
          margin: 20,
          border: '1px solid red',
          padding: '100px 0',
          textAlign: 'center',
        }}
        onClick={onClick}
      >
        Click this region please : )
      </div>

      {state.point && (
        <Align target={state.point} align={align}>
          <div
            style={{
              position: 'absolute',
              width: 100,
              height: 100,
              background: 'rgba(0, 255, 0, 0.5)',
              pointerEvents: 'none',
            }}
          >
            Align
          </div>
        </Align>
      )}
    </div>
  );
};

export default AlignExample;
