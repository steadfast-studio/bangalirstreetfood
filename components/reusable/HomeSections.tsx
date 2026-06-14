const HomeSections = ({
  className,
  children,
  style,
}: {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={`mx-auto max-w-6xl p-8 py-32 xl:py-44 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default HomeSections;
