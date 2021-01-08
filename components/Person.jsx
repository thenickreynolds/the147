export default function({name, image}) {
    return <div>
    <img src={image} />
    <span>{name}</span>
  </div>;
}