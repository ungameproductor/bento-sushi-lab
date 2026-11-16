type Props = {
  kicker: string;
  title: string;
  lede: string;
};

export function PageHero({ kicker, title, lede }: Props) {
  return (
    <header className="page-hero">
      <p className="kicker">{kicker}</p>
      <h1>{title}</h1>
      <p className="lede">{lede}</p>
    </header>
  );
}
