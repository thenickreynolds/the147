"background-position: calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%); --mouse-x:32.5; --mouse-y:60.7143;";

export function ClickableButton({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => {};
}) {
  return (
    <div
      className="cursor-pointer text-center font-bold p-3 border rounded-md bg-clip-border transition-all shadow-sm hover:shadow-md hv:bg-red text-white bg-gradient-to-r from-blue-400 to-indigo-500 hover:blue-500 p-2"
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export function LinkButton({ text, href }: { text: string; href: string }) {
  return (
    <a href={href} target="_blank">
      <ClickableButton text={text} />
    </a>
  );
}
