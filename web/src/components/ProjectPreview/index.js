import { Link } from 'gatsby';
import React from 'react';
import { buildImageObj } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import BlockText from '../block-text';

// import * as styles from './project-preview.module.css';
// import { responsiveTitle3 } from '../../components/typography.module.css';
import ProjectPreviewStyles from './styles';

function ProjectPreview(props) {
  return (
    <ProjectPreviewStyles>
      <Link to={`/project/${props.slug.current}`}>
        <div className="leadMediaThumb">
          {props.mainImage && props.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(600)
                .height(Math.floor((16 / 16) * 600))
                .url()}
              alt={props.mainImage.alt}
            />
          )}
        </div>
        <div className="textBoxCurtain">
          <div className="textBox">
            <h3 className="title">{props.title}</h3>
            {props._rawExcerpt && (
              <div className="excerpt">
                <BlockText blocks={props._rawExcerpt} />
              </div>
            )}
          </div>
        </div>
      </Link>
    </ProjectPreviewStyles>
  );
}

export default ProjectPreview;
