export default function ({ name, image }: { name: string; image: string }) {
  return (
    <div>
      <img src={image} />
      <span>{name}</span>
    </div>
  );
}
