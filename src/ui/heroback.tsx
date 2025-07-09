const CoinIcon = ({ style }: { style?: React.CSSProperties }) => (
  <div
    className="absolute w-[60px] h-[60px] animate-float hover:scale-[1.05] transition-transform duration-500"
    style={style}
  >
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full stroke-black stroke-[1.5] fill-none opacity-70"
    >
      <circle cx="12" cy="12" r="10" />
      <text
        x="12"
        y="16"
        fontFamily="Arial, sans-serif"
        fontSize="12"
        textAnchor="middle"
        fill="#000"
      >
        C
      </text>
    </svg>
  </div>
);



export const HeroBackground = () => {
  const positions = [
    { top: '10%', left: '15%' },
    { top: '25%', left: '85%' , rotate:'20px' },
    { top: '0%', left: '50%' },
    { top: '60%', left: '98%' },
    { top: '75%', left: '10%' },
   
  ];

  return (
    <div className="absolute transform inset-0 pointer-events-none overflow-hidden">
      {positions.map((pos, index) => (
        <CoinIcon
          key={index}
          style={{
            top: pos.top,
            left: pos.left,
            transform: `translate(-50%, -50%) rotate(${(index % 2 === 0 ? 15 : -15)}deg) scale(1)`,
            zIndex: index % 3,
          }}
        />
      ))}
    </div>
  );
};

