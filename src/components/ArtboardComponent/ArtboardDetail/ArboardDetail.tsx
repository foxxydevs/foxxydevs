import React from 'react';

type ArtboardProps = {
  coverImage: string;
  altText: string;
  imgStart?: boolean;
};

const ArboardDetail: React.FC<ArtboardProps> = (props) => {
  const { imgStart } = props;
  return (
    <>
      <article>
        <div className='wrapper-row'>
          {/* tinggal panggil === true jika tidak === false */}
          {imgStart && (
            <div className='wrapper-column'>
              <div className='img-wrapper'>
                <img alt={props.altText} src={props.coverImage} />
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default ArboardDetail;
