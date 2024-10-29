declare module 'react-qr-scanner' {
    import { ComponentType } from 'react';
  
    interface Props {
      delay?: number; // Optional delay prop for scanning interval
      onScan: (data: any) => void;
      onError: (error: any) => void;
      // Add other props if necessary
      style?: React.CSSProperties; // Optional style prop for custom styling
    }
  
    const ReactQrScanner: ComponentType<Props>;
    export default ReactQrScanner;
  }
  