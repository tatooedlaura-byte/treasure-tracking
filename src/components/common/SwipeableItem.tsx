import { useState, useRef, type ReactNode } from 'react';

interface SwipeableItemProps {
  children: ReactNode;
  onDelete: () => void;
}

export function SwipeableItem({ children, onDelete }: SwipeableItemProps) {
  const [translateX, setTranslateX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);

  const DELETE_THRESHOLD = -80;

  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
    currentXRef.current = e.touches[0].clientX;
    setIsSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return;

    currentXRef.current = e.touches[0].clientX;
    const diff = currentXRef.current - startXRef.current;

    // Only allow swiping left (negative)
    if (diff < 0) {
      setTranslateX(Math.max(diff, -100));
    } else {
      setTranslateX(0);
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);

    if (translateX < DELETE_THRESHOLD) {
      // Show delete confirmation
      if (confirm('Delete this item?')) {
        onDelete();
      }
    }

    setTranslateX(0);
  };

  return (
    <div className="swipeable-container">
      <div className="swipeable-delete-bg">
        <span>Delete</span>
      </div>
      <div
        className="swipeable-content"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: isSwiping ? 'none' : 'transform 0.2s ease-out',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>

      <style>{`
        .swipeable-container {
          position: relative;
          overflow: hidden;
        }

        .swipeable-delete-bg {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100px;
          background: var(--color-error);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: var(--font-sm);
        }

        .swipeable-content {
          position: relative;
          background: var(--color-card);
          z-index: 1;
        }
      `}</style>
    </div>
  );
}
