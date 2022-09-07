import React from 'react';

type tLayoutProps = {
  children?: React.ReactNode;
  fullscreen?: boolean;
};

const APP_SCREEN_WIDTH_MAXIMUM = 400;
const APP_SCREEN_WIDTH_MINIMUM = 200;

export default function AppLayout({
  children,
  fullscreen = false,
}: tLayoutProps) {

  const [width, setWidth] = React.useState<number>(APP_SCREEN_WIDTH_MAXIMUM);

  React.useEffect(() => {
    function UpdateWidth() {
      if (typeof window !== 'undefined')
        setWidth(
          window.innerWidth > APP_SCREEN_WIDTH_MAXIMUM
            ? APP_SCREEN_WIDTH_MAXIMUM
            : window.innerWidth < APP_SCREEN_WIDTH_MINIMUM
            ? APP_SCREEN_WIDTH_MINIMUM
            : window.innerWidth
        );
    }

    window.addEventListener('resize', UpdateWidth);

    UpdateWidth();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: fullscreen ? '100vh' : '400px',
        // backgroundColor: 'yellow',
      }}
    >
      <div
        style={{
          maxWidth: width,
          width: width,
          position: 'relative',
          //border: '1px grey solid'
          // backgroundColor: 'springgreen',
          // comment here for later use
        }}
      >
        {children}
      </div>
    </div>
  );
}