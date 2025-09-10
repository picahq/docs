export const Header = ({size, text}) => {
  const Tag = `h${size}`;

  return <Tag>{text}</Tag>;
};
