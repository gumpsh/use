export default function Logo({ logo, title }) {
  return (
    <div className="logo">
      <span role="img">{logo}</span>
      <h1>{title}</h1>
    </div>
  );
}
