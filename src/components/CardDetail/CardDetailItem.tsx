interface Props {
  item: string;
  content: string;
}

const CardDetailItem: React.FC<Props> = ({ item, content }) => {
  return (
    <div className="item">
      <span>{item}: </span>
      <span>{content}</span>
    </div>
  );
};

export default CardDetailItem;
