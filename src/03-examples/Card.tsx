import { useLayoutEffect, useRef, useState } from 'react';
import './styles.css';

interface Props {
  imageUrl: string;
  name: string;
  status: string;
}

export const Card = ({ imageUrl, name, status }: Props) => {
  const pRef = useRef({} as HTMLImageElement | null);
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (pRef.current) {
      const { height, width } = pRef.current.getBoundingClientRect();
      setBoxSize({ height, width });
    }
  }, [imageUrl, pRef]);

  return (
    <>
      <div className="card-container" style={{ display: 'flex' }}>
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                ref={pRef}
                src={imageUrl}
                className="img-fluid rounded-start"
                alt={name}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  <small className="text-body-secondary">{status}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5>{JSON.stringify(boxSize)}</h5>
    </>
  );
};
