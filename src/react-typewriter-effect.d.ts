declare module 'react-typewriter-effect' {
    import React from 'react';
  
    export interface TypewriterProps {
      options: {
        strings: string[];
        autoStart?: boolean;
        loop?: boolean;
        cursor?: string;
        wrapperClassName?: string;
        cursorClassName?: string;
        cursorStyle?: React.CSSProperties;
        deleteSpeed?: number;
        delaySpeed?: number;
        onTypingStart?: () => void;
        onTypingEnd?: () => void;
        onStringTyped?: (currentString: string) => void;
        onLoopEnd?: () => void;
        onFinish?: () => void;
      };
    }
  
    const Typewriter: React.FC<TypewriterProps>;
  
    export default Typewriter;
  }
  