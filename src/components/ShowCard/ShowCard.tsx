import { IShow } from "../../interfaces/show";

const ShowCard = (props: IShow) => {
  return <p>{props.show.name}</p>;
};

export default ShowCard;
