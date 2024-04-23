export type SidebarItemProps = {
  title: string;
  icon: any;
};

export type HeadingProps = {
  heading: string;
};

export type InputBarProps = {
  heading: string;
};

export type MainProps = {
  list: listType[];
  heading: string;
};

export type stepsType = {
  isCompleted: boolean;
  step: string;
};

export type listType = {
  id: string;
  timeOfCreation: Number;
  taskname: string;
  listType: string[];
  steps: stepsType[];
  dueDate: Date;
  Repeat: "";
  file: string[];
  Notes: string;
};
