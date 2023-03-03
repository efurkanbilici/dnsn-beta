export default function Section({ children, className }) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="block max-w-7xl h-full mx-auto px-2 py-14"
        data-container={true}
      >
        {children}
      </div>
    </div>
  );
}
