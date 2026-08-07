const SketchDivider = () => {
  return (
    <div style={{ width: '100%', overflow: 'hidden', padding: '1rem 0', display: 'flex', justifyContent: 'center' }}>
      <svg 
        viewBox="0 0 1200 30" 
        style={{ width: '90%', maxWidth: '1100px', height: 'auto', maxHeight: '24px' }}
        preserveAspectRatio="none"
      >
        <path 
          d="M0,15 C150,5 300,25 450,12 C600,0 750,28 900,15 C1050,2 1150,20 1200,15" 
          fill="none" 
          stroke="var(--ink-black)" 
          strokeWidth="3" 
          strokeLinecap="round"
          strokeDasharray="1200"
        />
        <path 
          d="M0,17 C160,8 310,22 460,10 C610,2 760,25 910,17 C1060,5 1160,18 1200,17" 
          fill="none" 
          stroke="var(--ink-light)" 
          strokeWidth="1.5" 
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    </div>
  );
};

export default SketchDivider;
