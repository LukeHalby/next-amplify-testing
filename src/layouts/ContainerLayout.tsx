import { Drawer, Grid, Modal, Popover } from '@geist-ui/core';

type tLayoutProps = {
  children?: React.ReactNode;
};

export default function ContainerLayout({ children }: tLayoutProps) {
  return (
    <Grid.Container width="100%" gap={0} justify="center">
      <Grid.Container xs={22} justify="center">
        <Grid style={{ minWidth: '100%' }}>{children}</Grid>
        {/* to ensure these components do in fact pop over all other UIs in app these are instantiated here first */}
        <Drawer />
        <Modal />
        <Popover />
        {/* if you delete / comment out it may cause these components to not pop on top of other components like a Drawer beneath */}
      </Grid.Container>
    </Grid.Container>
  );
}