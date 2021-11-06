export default function Container({ children, addClass }) {
  return (
    <div className={`max-w-7xl mx-auto h-full w-full ${addClass}`}>
      {children}
    </div>
  );
}
